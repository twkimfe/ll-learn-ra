interface CounterAction {
  type: 'UP' | 'DOWN' | 'RESET';
  value: number;
}

// TODO 리듀서 작성
// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
// 로직을 컴포넌트 내부에서 직접 구현하지 않고 외부에서 구현
// state: 이전 상태(useReducer가 내부적으로 관리, 이전의 리턴값이 다음의 state로 전달)
// action: 동작을 정의한 객체(자유롭게 작성. 일반적으로 type 속성에 동작을, value 속성에 값을 지정)
// 리턴값: 새로운 상태
function counterReducer(state: number, action: CounterAction): number { // (6, { type: 'DOWN', value: 1 }) => 5
  let newState = state;

  switch(action.type){
    case 'UP':
      newState = state + action.value;
      break;
    case 'DOWN':
      newState = state - action.value;
      break;
    case 'RESET':
      newState = action.value;
      break;
  }

  console.log(`${state} ${action.type} ${action.value} => ${newState}`);
  return newState;
}

export default counterReducer;

// console.log(counterReducer(6, { type: 'DOWN', value: 1 })); // 5
// console.log(counterReducer(8, { type: 'UP', value: 2 })); // 10
// console.log(counterReducer(3, { type: 'RESET', value: 5 })); // 5