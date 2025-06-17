import { useEffect, useState } from "react";
import type { ResData } from "#types/todo";

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = 'https://fesp-api.koyeb.app/todo';

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

function useFetch<T>(fetchParams: FetchParams) {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<T | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);
  
  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const requestFetch = async (params: FetchParams) => {
    console.log('fetch api로 요청', params);
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
        setData(jsonRes as T);
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
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  return { isLoading, error, data };
}

export default useFetch;