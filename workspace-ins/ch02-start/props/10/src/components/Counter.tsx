import Button from "@components/Button";
import { useState } from "react";

// Counter 컴포넌트
function Counter(){
  console.log('\tCounter 호출됨');

  const [ count, setCount ] = useState(0);

  // 카운터 감소
  const handleDown = () => {
    setCount(count - 1);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + 1);
  };

  // 카운터 초기화
  const handleReset = (event: React.MouseEvent) => {
    setCount(0);
  };

  return (
    <div id="counter">
      <Button color="red" onClick={ handleDown }>-_-</Button>
      <Button type="reset" onClick={ (event) => { handleReset(event) }}>0_0</Button>
      <Button type="submit" color="blue" onClick={ handleUp }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;