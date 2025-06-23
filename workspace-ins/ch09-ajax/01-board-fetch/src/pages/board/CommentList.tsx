import CommentNew from "@/pages/board/CommentNew";
import type { ReplyType } from "@/types/BoardType";

interface PropType {
  replies: ReplyType[];
}

function CommentList({ replies=[] }: PropType) {
  const replyList = replies.map(reply => <li key={ reply._id }>{ reply.content }</li>);

  return (
    <>
      <h3>댓글 목록</h3>
      <ul>
        { replyList }
      </ul>
      <CommentNew />
    </>
  );
}

export default CommentList;