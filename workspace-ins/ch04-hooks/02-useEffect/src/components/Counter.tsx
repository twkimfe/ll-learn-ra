import Button from "@components/Button";
import { useState } from "react";

// Counter 컴포넌트
function Counter(){
  console.log('\tCounter 호출됨');

  const [ count, setCount ] = useState(0);

  // TODO 2. 증감값을 입력하면 입력값만큼 증감
  
  // TODO 1. 1초 후에 handleUp()을 호출해서 자동으로 값 한번 증가
  

  // 카운터 감소
  const handleDown = () => {
    setCount(count - 1);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + 1);
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
      />
      <Button color="red" onClick={ handleDown }>-_-</Button>
      <Button type="reset" onClick={ handleReset }>0_0</Button>
      <Button type="submit" color="blue" onClick={ handleUp }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;