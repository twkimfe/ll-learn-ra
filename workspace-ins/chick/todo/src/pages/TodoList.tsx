import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void;
}

function TodoList({ itemList, deleteItem }: TodoListPropType) {

  const liList = itemList.map((item) => {
    return (
      <TodoItem key={ item._id } item={ item } deleteItem={ deleteItem } />
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}

export default TodoList;