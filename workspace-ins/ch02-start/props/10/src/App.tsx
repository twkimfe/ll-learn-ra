import Counter from "@components/Counter";
import Header from "@components/Header";

// App 컴포넌트(어플리케이션의 시작점)
function App(){
  console.log('App 호출됨');
  return (
    <div id="app">
      <Header />
      <Counter />
      <Counter />
    </div>
  );
}
export default App;