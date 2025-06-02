import Reaction from '../reaction.js';
import TodoItem from './TodoItem.js';
function TodoList({ itemList, toggleDone, deleteItem }){
  const items = itemList.map(item => TodoItem({ item, toggleDone, deleteItem }));
  return (
    Reaction.createElement('ul', { class: 'todolist' }, items)
  );
}
export default TodoList;