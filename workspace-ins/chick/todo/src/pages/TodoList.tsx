import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {

  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ];

  // useState가 처음으로 호출될 때 itemList 값은 sampleItemList가 된다.
  // useState가 두번째 또는 그 이상 호출될 때는 itemList 값은 setItemList()에 전달한 newItemList가 된다.
  const [ itemList, setItemList ] = useState(sampleItemList);
  
  // 할일 삭제
  const deleteItem = (_id: number) => {
    // _id: 2일 경우 1, 3만 담은 새로운 배열을 반환
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  };

  const liList = itemList.map((item) => {
    return (
      <TodoItem key={ item._id } item={ item } deleteItem={ deleteItem } />
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}

export default TodoList;