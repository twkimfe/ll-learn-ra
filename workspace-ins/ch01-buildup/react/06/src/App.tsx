import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Todo from './pages/Todo';

function App(){
  return (
    <div id="todo">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App
