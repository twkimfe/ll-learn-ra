interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItem;
  hello: string;
}

function TodoItem({ item }: TodoItemProps) {

  const handleDelete = (_id: number) => {
    console.log(_id, '삭제 요청.');
  };

  return (
    <li>
      <span>{ item._id }</span>
      <span><s>{ item.title }</s></span>
      <button type="button" onClick={ () => handleDelete(item._id) }>삭제</button>
    </li>
  );
}

export default TodoItem;