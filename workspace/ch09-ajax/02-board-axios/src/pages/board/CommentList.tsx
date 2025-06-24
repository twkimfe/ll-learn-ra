import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentNew from "@/pages/board/CommentNew";
import type { ReplyListResType, ReplyType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function CommentList() {
  // 서버 데이터를 저장할 상태
  const [data, setData] = useState< ReplyType[] | null >(null);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태
  const [error, setError] = useState<Error | null>(null);

  // axios instance
  const axios = useAxiosInstance();

  // API 서버에 1번 게시물의 댓글 목록을 fetch() 요청을 보낸다.
  const requestCommentList = async () => {
    // TODO 작업이 실패하면 자동으로 재시도하기(catch 블럭에서 지정한 횟수만큼 requestCommentList() 호출)
    // TODO 다른 탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신하기
    //    - document에 visibilityChange 이벤트로 브라우저의 가시성 변경을 감지
    //    - window에서 focus 이벤트로 requestCommentList() 호출
    // TODO 일정 시간 동안 캐시에서 서버 호출 횟수 줄이기(캐시 관련 로직 작성)
    // TODO 주기적으로 호출해서 데이트를 자동 갱신하기(setInterval()함수로 일정 시간마다 requestCommentList()호출)

    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const response = await axios.get<ReplyListResType>('/posts/1/replies', {
        params: {
          delay: 1000,
          // page: 3,
          // limit: 10,
        }
      });
      
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
    requestCommentList();
  },[])

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