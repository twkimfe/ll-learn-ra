import type { TodoItem } from "@pages/TodoInfo";
import { Link } from "react-router";

interface TodoListItemProps {
  item: TodoItem;
}

function TodoListItem({ item }: TodoListItemProps) {
  return (
    <li>
      <span>{ item._id }</span>
      <Link to={`/list/${item._id}`}>{ item.title }</Link>
      <Link to="/list">삭제</Link>
    </li>
  );
}

export default TodoListItem;