import CommentList from "@/pages/board/CommentList";
import type { BoardInfoType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function BoardInfo() {
  // 서버의 데이터를 저장할 상태
  const [data, setData] = useState<BoardInfoType | null>(null);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태
  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 상세정보를 fetch() 요청으로 보낸다.
  const requestInfo = async () => {
    try{
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const response = await fetch('https://fesp-api.koyeb.app/market/posts/1?delay=1000', {
        headers: {
          'Client-Id': 'openmarket'
        }
      });
      console.log('response', response);
      const jsonData = await response.json();
      console.log('jsonData', jsonData);
      if(jsonData.ok){ // 응답이 성공일 경우
        // 게시물 상세 정보 출력
        setData(jsonData.item);
        setError(null);
      }else{ // 응답이 실패일 경우
        // 에러 메세지 출력
        throw new Error(jsonData.message);
      }
    }catch(err){
      setError(err as Error);
      setData(null);
      // alert('게시물 상세 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.');
      console.error(err);
    }finally{
      // 성공, 실패와 상관 없이 로딩 상태를 false로 지정
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestInfo();
  }, []); // 마운트 후에 한번만 실행

  return (
    <>
      <h1>01 Fetch API</h1>

      { isLoading && 
        <p>로딩중...</p>
      }

      { error && 
        <p>{ error.message }</p>
      }

      { data && 
        <>
          <h2>{ data.title }</h2>
          <p>{ data.content }</p>
          <CommentList replies={ data.replies } />
        </>
      }

    </>
  );
}

export default BoardInfo;