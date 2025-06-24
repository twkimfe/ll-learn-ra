import CommentNew from "@/pages/board/CommentNew";
import type { ReplyType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function CommentList() {

    // 서버 데이터를 저장할 상태
    const [data, setData] = useState< ReplyType[] | null >(null);
  
    // 로딩 상태
    const [isLoading, setIsLoading] = useState(false);
  
    // 에러 상태
    const [error, setError] = useState<Error | null>(null);
  
    // API 서버에 1번 게시물의 댓글 목록을 fetch() 요청을 보낸다.
    const requestCommentList = async () => {
      try {
        // 로딩 상태를 true로 지정
        setIsLoading(true);
  
        const response = await fetch('https://fesp-api.koyeb.app/market/posts/1/replies?page=1&limit=10&delay=1000', {
          headers: {
            'Client-id': 'openmarket'
          }
        });
        console.log('response', response);
        const jsonData = await response.json();
        console.log('jsonData',jsonData);
        if(jsonData.ok) { // 응답이 성공일 경우
          // 댓글 목록 출력
          setData(jsonData.item)
          setError(null);
        }else { // 응답이 실패일 경우
          // 에러 메세지 출력
          throw new Error(jsonData.message);
        }
      } catch (err) {
        setError(err as Error);
        setData(null)
        // alert('댓글 목록 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.')
        console.error(err);
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