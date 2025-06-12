import Button from "@components/Button";
import CounterReducer from "../CounterReducer";
import { useReducer, useState } from "react";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children='0' }: CounterProps){
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  // const [ count, setCount ] = useState(initCount);
  const [ count, countDispatch ] = useReducer(CounterReducer ,initCount);
  
  const [step, setStep] = useState(1);



  // 증감값 변경 처리
  function handleStepChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newStep = Number(e.target.value);
    setStep(newStep);
  }

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      {/* 제어 컴포넌트 value, onChange 사용 */}
      <input 
        id="step" 
        type="number" 
        value={ step } 
        onChange={ handleStepChange } 
      />
      <Button color="red" onClick={ () => {countDispatch({type:'DOWN', value: step});} }>-_-</Button>
      <Button type="reset" onClick={ () => {countDispatch({type:'RESET', value: step});} }>0_0</Button>
      <Button type="submit" color="blue" onClick={ () => {countDispatch({type:'UP', value: step});} }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;