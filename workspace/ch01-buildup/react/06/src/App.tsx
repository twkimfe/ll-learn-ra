import "./App.css";
import Header from "./components/Header";
import Todo from "./pages/Todo";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="todo">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
