export interface TodoItem {
  num: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItem;
  toggleDone: (num: number) => void;
  deleteItem: (num: number) => void;
}

function TodoItem({ item, toggleDone, deleteItem }: TodoItemProps){
  console.log(item.num, '리렌더링.');
  return (
    <li>
      <span>{ item.num }</span>
      <span onClick= { () => toggleDone(item.num) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => deleteItem(item.num) }>삭제</button>
    </li>
  );
}

export default TodoItem;