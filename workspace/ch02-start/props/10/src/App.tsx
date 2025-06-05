import Header from "@components/Header";
import Counter from "@components/Counter";

function App() {
  console.log("App 호출");
  return (
    <div id="app">
      <Header />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
