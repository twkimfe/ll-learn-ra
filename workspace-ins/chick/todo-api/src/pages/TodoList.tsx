import { useState } from "react";
import useAxiosInstance from "../hooks/useAxiosInstance";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

function TodoList({ itemList, deleteItem, toggleDone }: TodoListPropType) {

  const axiosInstance = useAxiosInstance();

  const fetchList = async () => {
    try{
      const res = await axiosInstance.get('/todolist');
      // fulfilled 상태
      console.log('서버의 응답', res);

    }catch(err){
      // rejected 상태
      console.error(err);
    }
  };

  fetchList();

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