import Button from "@components/Button";
import { useEffect, useState } from "react";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children = '0' }: CounterProps){
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  const [ count, setCount ] = useState(0);
  const [ step, setStep ] = useState(initCount)

  // TODO 2. 증감값을 입력하면 입력값만큼 증감
  

  // TODO 1. 1초 후에 handleUp()을 호출해서 자동으로 값 한번 증가
  // 마운트 된 이후 한번만 실행
  useEffect(()=> {
    setTimeout(()=> {
    handleUp()
  },1000)
  console.log('dependencies에 빈배열 지정 시, 마운트 후 한번만 실행');
  },[]);

  //   setTimeout(()=> {
  //   handleUp()
  // },1000)

  // 위 코드와 아래 코드는 실행 시간이 다름
  // 마운트 된 이후 한번만 실행
  // useEffect(()=> {
  //   setTimeout(()=> {
  //   handleUp()
  // },1000)
  // console.log('dependencies에 빈배열 지정 시, 마운트 후 && 업데이트 후 실행(무한 렌더링)');
  // });

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
        value={ step }
        onChange={ (event)=> setStep(Number(event.target.value)) }
      />
      <Button color="red" onClick={ handleDown }>-_-</Button>
      <Button type="reset" onClick={ handleReset }>0_0</Button>
      <Button type="submit" color="blue" onClick={ handleUp }>+_+</Button>
      <span>{ count }</span>
    </div>
  );
}
export default Counter;