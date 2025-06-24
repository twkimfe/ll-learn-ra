import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentNew from "@/pages/board/CommentNew";
import type { ReplyListResType } from "@/types/BoardType";
import { useQuery } from "@tanstack/react-query";

function CommentList() {

  // axios instance
  const axios = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', 1, 'replies'],
    queryFn: () => axios.get('/posts/1/replies', {
      params: {
        // delay: Math.random() * 6000
        delay: 1000
      }
    }),
    select: (response: { data: ReplyListResType}) => response.data.item,

    retry: 3, // 작업이 실패하면 자동으로 재시도하기(default 3)
    refetchOnWindowFocus: true, // 다른탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신하기(default true)
    staleTime: 1000*20, // 일정 시간동안은 캐시해서 서버 호출 횟수 줄이기(default 0)
    // refetchInterval: 1000*3, // 주기적으로 호출해서 데이터를 자동으로 갱신하기

  });

  const replyList = data?.map(reply => <li key={ reply._id }>{ reply.content }</li>);

  let content = null;
  if(isLoading){
    content = <p>댓글 로딩중...</p>;
  }else if(error){
    content = <p>{ error.message }</p>;
  }else if(data){
    content = 
      <>
        <ul>
          { replyList }
        </ul>
        <CommentNew />
      </>;
  }

  return (
    <>
      <h3>댓글 목록</h3>

      { content }
      
    </>
  );
}

export default CommentList;