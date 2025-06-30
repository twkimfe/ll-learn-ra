export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItem;
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

function TodoItem({ item, deleteItem, toggleDone }: TodoItemProps) {

  const handleDelete = (_id: number) => {
    console.log(_id, '삭제 요청.');
    deleteItem(_id);
  };

  return (
    <li>
      <span>{ item._id }</span>
      <span onClick={ () => toggleDone(item._id) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => handleDelete(item._id) }>삭제</button>
    </li>
  );
}

export default TodoItem;