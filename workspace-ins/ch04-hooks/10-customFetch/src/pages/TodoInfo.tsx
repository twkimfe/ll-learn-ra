import type { TodoItemRes } from "#types/todo";
import useAxios from "@hooks/useAxios";

function TodoInfo() {

  console.log(location); // /todolist/5
  const todoId = location.pathname.split('/').pop(); // 5

  const { isLoading, error, data } = useAxios<TodoItemRes>({ url: `/todolist/${todoId}?delay=1000` });
  return (
    <>
      <h1>10 customHook - useFatch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 상세 조회</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      { isLoading && 
        <p>로딩중...</p>
      }

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      { error && <p style={{ color: 'red' }}>{ error.message }</p> }

      <div>
        <div>제목 : { data?.item.title }</div>
        <div>내용 : { data?.item.content }</div>
        <div>상태 : { data?.item.done ? '완료' : '미완료' }</div>
        <div>작성일 : { data?.item.createdAt }</div>
        <div>수정일 : { data?.item.updatedAt }</div>
      </div>
      
    </>
  );
}

export default TodoInfo;