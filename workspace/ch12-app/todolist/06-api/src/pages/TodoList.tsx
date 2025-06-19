import TodoListItem from "@pages/TodoListItem";
import { Link } from "react-router";
import type { TodoItem } from "@pages/TodoInfo";
import { useEffect, useState } from "react";
import useAxiosInstance from "@hooks/useAxiosInstance";

interface TodoList {
  items: TodoItem[];
}

const dummyData: TodoList = {
  items: [{
    _id: 1,
    title: '잠자기',
    done: true,
    createdAt: '2025.06.16 16:49:00',
    updatedAt: '2025.06.16 16:49:00',
  }, {
    _id: 2,
    title: '자바스크립트 복습',
    done: false,
    createdAt: '2025.06.17 16:49:00',
    updatedAt: '2025.06.17 16:49:00',
  }]
};

function TodoList() {
  const axiosInstance = useAxiosInstance();

  const [ data, setData ] = useState<TodoList | null >(null);

  // 할일 목록을 API 서버에서 조회
  const fetchTodoList = async () => {
    console.log('API 서버에 목록 요청');
    // TODO API 서버에 목록 요청
    try {
      const res= await axiosInstance.get<TodoList>('/todolist')
      // 더미 데이터로 지정 
      setData( res.data )
    } catch(err) {
      console.error(err);
      alert('할일 목록 조회에 실패했습니다.')
    }
  }

  // 삭제 처리
  const handleDelete = async (_id: number) => {
    console.log('API 서버에 삭제 요청', _id);
    try{
      // TODO API 서버에 삭제 요청
      await axiosInstance.delete(`/todolist/${_id}`)

      alert( '삭제가 완료되었습니다.')
      
      // TODO API 서버에 목록 요청
      fetchTodoList();
    } catch(err) {
      console.error(err);
      alert('할일 삭제에 실패했습니다.')
    }
  };

  useEffect(() => {
    fetchTodoList();
  },[]) // 빈 배열을 전달해서 마운트 때에만 실행

  const itemList = data?.items.map(item => <TodoListItem key={ item._id } item={ item } handleDelete={ handleDelete }/>)

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/add">추가</Link>
        <br/>
        <form className="search">
          <input type="text" autoFocus/>
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">
          { itemList }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;