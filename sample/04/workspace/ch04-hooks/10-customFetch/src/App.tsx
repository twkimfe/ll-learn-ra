import { useEffect, useState } from "react";

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = 'https://fesp-api.koyeb.app/todo';

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

// Todo 아이템의 타입 정의
interface Todo {
  _id: number;      // Todo 아이템의 고유 식별자
  title: string;    // Todo 제목
  done: boolean;    // 완료 여부
}

// Todo 목록 조회 성공시 응답 데이터 타입 정의
interface TodoListRes {
  ok: 1;  // 성공 여부 (1: 성공)
  items: Todo[];  // Todo 아이템 배열
  pagination: {   // 페이지네이션 정보
    page: number;      // 현재 페이지
    limit: number;     // 페이지당 아이템 수
    total: number;     // 전체 아이템 수
    totalPages: number; // 전체 페이지 수
  };
}

// 에러 응답 데이터 타입 정의
interface ErrorRes {
  ok: 0;  // 성공 여부 (0: 실패)
  error: Error; // 에러 객체
}

// 응답 데이터 타입 정의
type ResData = TodoListRes | ErrorRes;

function App() {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<TodoListRes | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);
  
  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const fetchTodo = async (params: FetchParams) => {
    console.log('fetchTodo 함수 호출됨', params);
    try{
      // 로딩 상태를 true로 설정
      setIsLoading(true);
      
      // fetch API를 사용하여 서버에 GET 요청
      const res = await fetch(API_SERVER + params.url);
      console.log('서버 응답:', res);
      // 응답 데이터를 JSON 형식으로 파싱
      const jsonRes: ResData = await res.json();
      console.log('파싱된 데이터:', jsonRes);

      // 응답이 성공적인 경우
      if(jsonRes.ok){
        // Todo 목록 상태 업데이트
        setData(jsonRes);
        setError(null);
      }else{
        // 에러가 발생한 경우 에러 메시지 상태 업데이트
        throw new Error(jsonRes.error.message);
      }
    }catch(err){
      // 네트워크 오류 등 예외 발생시 처리
      console.error('에러 발생:', err);
      setError(err as  Error);
      setData(null);
    }finally{
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };

  // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
  useEffect(() => {
    // 1초 지연을 주어 API 호출 (로딩 상태 테스트를 위해)
    const fetchParams = { url: '/todolist?delay=1000' };
    fetchTodo(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  return (
    <>
      <h1>09 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 목록</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      { isLoading && 
        <p>로딩중...</p>
      }

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      { error && <p style={{ color: 'red' }}>{ error.message }</p> }

      {/* Todo 목록을 리스트로 렌더링 */}
      <ul>
        { data?.items.map((item) => (
          <li key={item._id}>{item.title}</li>
        )) }
      </ul>
    </>
  );
}

export default App
