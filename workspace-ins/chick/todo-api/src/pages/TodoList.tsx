
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";


interface TodoListPropType {
  itemList: TodoItemType[];
  fetchList: () => void;
}

function TodoList({ itemList, fetchList }: TodoListPropType) {

  const liList = itemList.map((item) => {
    return (
      <TodoItem key={ item._id } item={ item } fetchList={ fetchList } />
    );
  });

  return (
    <ul className="todolist">
      { liList }
    </ul>
  );
}

export default TodoList;