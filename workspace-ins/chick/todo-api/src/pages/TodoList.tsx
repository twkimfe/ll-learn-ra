import { useEffect, useState } from "react";
import useAxiosInstance from "../hooks/useAxiosInstance";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

function TodoList({ deleteItem, toggleDone }: TodoListPropType) {

  const axiosInstance = useAxiosInstance();

  const [ itemList, setItemList ] = useState<TodoItemType[]>([]);

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
  }, []); // 마운트 된 후에 한번만 호출

  const liList = itemList.map((item) => {
    return (
      <TodoItem key={ item._id } item={ item } deleteItem={ deleteItem } toggleDone={ toggleDone } />
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}

export default TodoList;