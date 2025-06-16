import Button from "@components/Button";
import { useRef, useState } from "react";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children='1' }: CounterProps){
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  // TODO 커스텀 훅으로 수정
  const [ count, setCount ] = useState(0);
  const stepRef = useRef(initCount);
 
  // 카운터 감소
  const handleDown = () => {
    setCount(count - stepRef.current);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + stepRef.current);
  };

  // 카운터 초기화
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input 
        id="step" 
        type="number" 
        value={ stepRef.current }
        onChange={ (event) => stepRef.current = Number(event.target.value) }
      />
      <Button color="red" onClick={ handleDown }>-_-</Button>
      <Button type="reset" onClick={ handleReset }>0_0</Button>
      <Button type="submit" color="blue" onClick={ handleUp }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;