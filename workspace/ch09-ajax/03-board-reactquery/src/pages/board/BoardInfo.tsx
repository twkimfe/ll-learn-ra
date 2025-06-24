import CommentList from "@/pages/board/CommentList";
import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";
import type { BoardInfoResType } from "@/types/BoardType";

function BoardInfo() {
  // axios instance
  const axios = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', 1],
    queryFn: ()=> axios.get('/posts/1?delay=1000'), // 여기에는 await 추가하면 안됨
    select: (response: { data: BoardInfoResType } ) => response.data.item,
  })

  return (
    <>
      <h1>03 React Query(Tanstack Query) 라이브러리</h1>
      
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