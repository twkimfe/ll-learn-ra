import TodoInfo from "@pages/TodoInfo";
import TodoList from "@pages/TodoList";

function App() {

  const todoId = location.pathname.split('/').pop();

  return (
    <>
      { todoId && <TodoInfo /> }
      { !todoId && <TodoList /> }
    </>
  );
}

export default App
