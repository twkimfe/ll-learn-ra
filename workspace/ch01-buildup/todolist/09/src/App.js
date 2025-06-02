import Reaction from './reaction.js'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Todo from "./pages/Todo.js";

function App(){
  // 샘플 목록
  const initItemList = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  const [itemList, setItemList] = Reaction.useState(initItemList)

  // 할일 추가 - 개선 코드
  // 항
  function addItem(title) {
    console.log("할일 추가");
    const item = { num: 
      itemList.length > 0 ? itemList[itemList.length - 1].num +1 : 1, title, done: false };
    setItemList([...itemList, item])
  }

  // 완료/미완료 처리
  function toggleDone(num) {
    console.log(num, "완료/미완료");
    const newItemList = itemList.map(item=> item.num === num ? { ...item, done: !item.done }: item)

    setItemList(newItemList);
  }

  // 할일 삭제
  function deleteItem(num) {
    console.log(num, "할일 삭제");
    const newItemList = itemList.filter(item=> item.num !== num)
    setItemList(newItemList)
  }

  return (
    Reaction.createElement('div', { id: 'todo' }, 
      Header,
      Todo({ itemList, addItem, toggleDone, deleteItem }),
      Footer
    )
  );
}

export default App