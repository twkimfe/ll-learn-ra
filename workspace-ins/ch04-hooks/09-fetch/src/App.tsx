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

  /* 
    TODO api 서버에서 할일 목록을 조회한 후 출력
    할일 목록을 조회하는 동안에는 로딩중 메세지 출력
    서버에서 정상 응답을 받을 경우 로딩중 상태를 해제 하고 할일 목록을 출력
    서버에서 에러를 응답받을 경우 에러 메세지를 출력하고 로딩중 상태를 해제
  */

  // Todo 목록을 저장할 상태 (초기값: null)
  const [ data, setData ] = useState<TodoListRes | null>(null);
  
  // 에러 메시지를 저장할 상태 (초기값: null)
  const [ error, setError ] = useState<Error | null>(null);
  
  // 로딩 상태를 저장할 상태 (초기값: false)
  const [ isLoading, setIsLoading ] = useState(false);
  
  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const fetchTodo = async (fetchParams: FetchParams) => {
    console.log('fetchTodo 함수 호출됨', fetchParams);
    try {
      // 로딩 상태를 true로 설정
      setIsLoading(true);

      const res = await fetch(API_SERVER + fetchParams.url);
      console.log('서버 응답', res);

      const jsonRes: ResData = await res.json();
      console.log('파싱된 데이터', jsonRes);

      if(jsonRes.ok){
        setData(jsonRes);
      }else{
        throw new Error(jsonRes.error.message);
      }
      
    } catch(err){
      // 네트워크 오류 같은 예외 발생 시
      console.error(err);
      setError(err as Error);
    } finally {
      // 성공/실패 여부과 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };

  // 컴포넌트가 마운트 된 후에 Todo 목록 조회
  useEffect(() => {
    console.log('마운트 후에 한번만 호출됨.');
    const params = { url: '/todolist?delay=1000' };
    fetchTodo(params);
  }, []); // 빈 배열을 전달해서 마운트시 한번만 실행되도록 설정

  return (
    <>
      <h1>09 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 목록</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      { isLoading && 
        <p>로딩중...</p> 
      }
      
      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      { error && 
        <p style={{ color: 'red' }}>{ error.message }</p> 
      }
          
      {/* 서버에서 받은 Todo 목록을 렌더링 */}
      <ul>
        { data?.items.map(item => <li key={item._id}>{ item.title }</li>) }
      </ul>
    </>
  );
}

export default App
