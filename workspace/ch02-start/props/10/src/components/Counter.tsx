import React from "react";
import Button from "@components/Button";

//counter 컴포넌트
function Counter() {
  console.log("\tCounter호출");
  // let count = 0;
  const [count, setCount] = React.useState(0);

  // 카운터 감소
  const handleDown = () => {
    // 데이터 갱신, count 값 감소
    setCount(count - 1);
  };

  // 카운터 증가
  const handleUp = () => {
    // 데이터 갱신, count 값 증가
    setCount(count + 1);
  };

  // 카운터 초기화
  const handleReset = (event: React.MouseEvent) => {
    // 데이터 갱신, count 값 초기화
    setCount(0);
  };

  return (
    <div id="counter">
      <Button type='button' color='red' onClick={ handleDown}>-_-</Button>
      <Button type='button' color='blue' onClick={ (event) => handleReset(event)}>0_0</Button>
      <Button type='button' color='green' onClick={ handleUp}>+_+</Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
