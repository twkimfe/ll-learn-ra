import { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {

  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ];

  // useState가 처음으로 호출될 때 itemList 값은 sampleItemList가 된다.
  // useState가 두번째 또는 그 이상 호출될 때는 itemList 값은 setItemList()에 전달한 newItemList가 된다.
  const [ itemList, setItemList ] = useState(sampleItemList);

  // { current: 4 } 리턴
  const nextId = useRef(itemList.length + 1);
  
  // 할일 삭제
  const deleteItem = (_id: number) => {
    // _id: 2일 경우 1, 3만 담은 새로운 배열을 반환
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  };

  // 할일 추가
  const addItem = (title: string) => {
    const newItem = { _id: nextId.current++, title, done: false };
    setItemList([ ...itemList, newItem ]);
  };

  // 완료/미완료 처리
  const toggleDone = (_id: number) => {
    console.log(`${_id} 완료/미완료 처리`);
    
  };

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <TodoInput addItem={ addItem } />
      <TodoList itemList={ itemList } deleteItem={ deleteItem } />
    </div>
  );
}

export default Todo;