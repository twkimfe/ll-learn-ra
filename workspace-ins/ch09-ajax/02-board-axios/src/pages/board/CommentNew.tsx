import useAxiosInstance from "@/hooks/useAxiosInstance";
import { useState } from "react";

function CommentNew() {

  // 댓글 내용 저장
  const [content, setContent] = useState('');

  // axios instance
  const axios = useAxiosInstance();

  // API 서버에 댓글 등록 요청
  const requestAddComment = async (formData: FormData) => {
    try{
      const response = await axios.post('/posts/1/replies', formData);

      // TODO 댓글 등록 후 댓글 목록 갱신(requestCommentList()를 props로 전달받아서 호출)

    }catch(err){
      // alert('게시물 상세 조회에 실패했습니다.\n잠시 후 다시 요청하시기 바랍니다.');
      console.error(err);
    }
  };

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO 중복 요청 방지(요청 시작 전에 버튼 비활성화, 응답 완료 후에 버튼 활성화)
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    requestAddComment(formData);
  };

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={ handleAddComment }>
        <textarea 
          name="content" 
          rows={3} cols={30} 
          placeholder="댓글 내용" 
          value={ content } 
          onChange={ e => setContent(e.target.value) } 
        /><br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;