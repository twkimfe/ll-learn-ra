import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";

interface TodoListPropType {
  itemList: TodoItemType[];
  deleteItem: (_id: number) => void;
  toggleDone: (_id: number) => void;
}

function TodoList({ itemList, deleteItem, toggleDone }: TodoListPropType) {

  const liList = itemList.map((item) => {
    return (
      <TodoItem key={ item._id } item={ item } deleteItem={ deleteItem } toggleDone={ toggleDone } />
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}

export default TodoList;