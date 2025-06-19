import TodoItem from "./TodoItem";

function TodoList() {

  // 샘플 목록
  const itemList = [
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ];

  const liList = itemList.map((item) => {
    return (
      <TodoItem key={ item._id } item={ item } hello="world" />
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}

export default TodoList;