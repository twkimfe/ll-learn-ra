import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import type { TodoItem } from "./TodoItem";
import useAxiosInstance from "../hooks/useAxiosInstance";

function Todo() {

  // useState가 처음으로 호출될 때 itemList 값은 sampleItemList가 된다.
  // useState가 두번째 또는 그 이상 호출될 때는 itemList 값은 setItemList()에 전달한 newItemList가 된다.
  const [ itemList, setItemList ] = useState<TodoItem[]>([]);

  const axiosInstance = useAxiosInstance();

  const fetchList = async () => {
    try{
      const res = await axiosInstance.get('/todolist'); // pending
      // fulfilled 상태
      console.log('서버의 응답', res);

      setItemList(res.data.items);

    }catch(err){
      // rejected 상태
      console.error(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <TodoInput fetchList={ fetchList } />
      <TodoList itemList={ itemList } fetchList={ fetchList } />
    </div>
  );
}

export default Todo;