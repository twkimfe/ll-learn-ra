import Title from "./components/Title";
import TodoList from "./pages/todo/List";

// Title, TodoList의 부모 컴포넌트
function App() {
  return (
    <div id="app">
      <div>
        <Title />
        <Title titleName="title 1" />
        <Title titleName="title 2" />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
