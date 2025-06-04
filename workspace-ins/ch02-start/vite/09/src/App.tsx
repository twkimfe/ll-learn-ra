import Title from "./components/Title";
import TodoList from "./pages/todo/List";

// Title, TodoList의 부모 컴포넌트
function App(){
  return (
    <div id="app">
      <div>
        <Title />
        <Title titleName="타이틀 1" />
        <Title titleName="타이틀 2" />
        <TodoList />
      </div>
    </div>
  );
}
export default App;
