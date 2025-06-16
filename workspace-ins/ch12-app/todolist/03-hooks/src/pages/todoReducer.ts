import type { TodoItem } from "@pages/TodoItem";
import { produce } from "immer";

// type TodoAction =
//   | { type: 'ADD'; value: TodoItem }
//   | { type: 'TOGGLE' | 'DELETE'; value: { _id: number } };

interface TodoAction {
  type: 'ADD' | 'TOGGLE' | 'DELETE';
  value: TodoItem | { _id: number };
}

function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState = state;
  // TODO 1. 상태 관리 로직 작성

  const targetIndex = state.findIndex(item => item._id === action.value._id);

  switch(action.type){
    case 'ADD':
      newState = produce(state, draft => { 
        // draft.push(action.value as TodoItem); // 타입 단언
        if('title' in action.value){ // 타입 가드
          draft.push(action.value);
        }
      });
      break;
    case 'TOGGLE':
      newState = produce(state, draft => { 
        draft[targetIndex].done = !draft[targetIndex].done;
      });
      break;
    case 'DELETE':
      newState = produce(state, draft => {
        draft.splice(targetIndex, 1);
      });
      break;
  }

  return newState;
}

export default todoReducer;