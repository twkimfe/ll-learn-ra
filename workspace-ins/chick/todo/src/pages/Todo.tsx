import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Todo;