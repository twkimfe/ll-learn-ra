import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentNew from "@/pages/board/CommentNew";
import type { ReplyListResType } from "@/types/BoardType";
import { useQuery } from "@tanstack/react-query";

function CommentList() {
  // axios instance
  const axios = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', 1, 'replies'],
    queryFn: ()=> axios.get('/posts/1/replies',{
      params:{
        delay: Math.random() * 6000
      }
    }), // 여기에는 await 추가하면 안됨
    select: (response: { data: ReplyListResType }) => response.data.item,
  
    retry: 3, // TODO 작업이 실패하면 자동으로 재시도하기(default 3)
    refetchOnWindowFocus: true, // TODO 다른 탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신하기
    staleTime: 1000 * 20, // TODO 일정 시간 동안 캐시에서 서버 호출 횟수 줄이기(캐시 관련 로직 작성)
    // refetchInterval: 1000 * 3 // TODO 주기적으로 호출해서 데이트를 자동 갱신하기(setInterval()함수로 일정 시간마다 requestCommentList()호출)
  })

  const replyList = data?.map( reply => <li key={ reply._id }>{ reply.content }</li>);

  return (
    <>
      <h3>댓글 목록</h3>
      
      { isLoading && <p>댓글 로딩중...</p> }
      { error && <p>{ error.message }</p> }
      { data && 
        <>
          <ul>
          { replyList }
          </ul>
          <CommentNew />
        </>
      }
    </>
  );
}

export default CommentList;