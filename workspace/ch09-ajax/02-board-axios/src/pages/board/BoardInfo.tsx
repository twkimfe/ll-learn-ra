import CommentList from "@/pages/board/CommentList";
import { useEffect, useState } from "react";
import type { BoardInfoResType, BoardInfoType } from "@/types/BoardType";
import useAxiosInstance from "@/hooks/useAxiosInstance";

function BoardInfo() {
  // 서버 데이터를 저장할 상태
  const [data, setData] = useState< BoardInfoType | null >(null);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태
  const [error, setError] = useState<Error | null>(null);

  // axios instance
  const axios = useAxiosInstance();

  // API 서버에 1번 게시물의 상세정보를 fetch() 요청을 보낸다.
  const requestInfo = async () => {
    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const response = await axios.get<BoardInfoResType>('/posts/1?delay=1000');
      
      // 게시물 상세 정보 출력
      setData(response.data.item)
      setError(null);
    } catch (err) {
      setError(err as Error);
      setData(null)
      console.error(err);
      // alert('게시물 상세 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.')
    } finally {
      // 성공, 실패와 상관 없이 로딩 상태를 false로 지정
      setIsLoading(false);
    }
  };

  useEffect(()=> { // mount 후 한번만 실행
    requestInfo();
  },[])

  return (
    <>
      <h1>02 Axios Library</h1>
      
      {isLoading && 
        <p>로딩중...</p>
      }

      {error &&
        <p>{ error.message }</p>
      }

      { data &&
        <>
          <h2>{ data.title }</h2>
          <p>{ data.content }</p>
          <CommentList />
        </>
      }
    </>
  );
}

export default BoardInfo;