import Button from "@components/Button";
import { useReducer, useRef, useState } from "react";

interface CounterProps {
  children: string;
}

interface CounterAction {
  type: 'DOWN' | 'UP' | 'RESET';
  value: number;
}

// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
// 로직을 컴포넌트 내부에서 직접 구현하지 않고 외부에서 구현
// state: 이전 상태(useReducer가 내부적으로 관리, 이전의 리턴값이 다음의 state로 전달)
// action: 동작을 정의한 객체(자유롭게 작성. 일반적으로 type 속성에 동작을, value 속성에 값을 지정)
// 리턴값: 새로운 상태
function counterReducer(state: number, action: CounterAction){ // (6, { type: 'UP', value: 1 }) => 7
  let newState;

  switch(action.type){
    case 'DOWN':
      newState = state - action.value;
      break;
    case 'UP':
      newState = state + action.value;
      break;
    case 'RESET':
      newState = action.value;
      break;
    default:
      newState = state;
  }

  console.log(`${state} ${action.type} ${action.value} => ${newState}`);
  return newState;
}

// Counter 컴포넌트
function Counter({ children='0' }: CounterProps){
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  const [ count, countDispatch ] = useReducer(counterReducer, initCount);

  // 1. 값이 바뀌어도 리렌더링이 되지 않음
  const stepRef = useRef(initCount); // { current: initCount } 객체 반환

  // 2. DOM 객체에 대한 직접 참조를 사용할 때
  const stepElem = useRef<HTMLInputElement>(null);

  // 카운터 감소
  function handleDown() {
    countDispatch({ type: 'DOWN', value: stepRef.current });
  };

  // 카운터 증가
  function handleUp() {
    countDispatch({ type: 'UP', value: stepRef.current });
  };

  // 카운터 초기화
  function handleReset() {
    countDispatch({ type: 'RESET', value: initCount });
    stepElem?.current?.focus();
  };

  // 증감값 변경 처리
  function handleStepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newStep = Number(e.target.value);
    stepRef.current = newStep;
  }

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      {/* TODO 비제어 컴포넌트로 만들어서 불필요한 리렌더링 방지 */}
      <input 
        ref={ stepElem }
        id="step" 
        type="number" 
        defaultValue={ stepRef.current } 
        onChange={ handleStepChange } 
      />
      <Button color="red" onClick={ handleDown }>-_-</Button>
      <Button type="reset" onClick={ handleReset }>0_0</Button>
      <Button type="submit" color="blue" onClick={ handleUp }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;