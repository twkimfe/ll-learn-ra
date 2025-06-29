import { countDownAtom, countAtom } from '@/jotai/atoms';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // useState처럼 getter, setter 모두 사용(구독)
  // const [ count, setCount ] = useAtom(countAtom);
  // const countUp = (step: number) => {
  //   setCount(count + step);
  // };

  // setter만 사용(구독하지 않음)
  const setCount = useSetAtom(countAtom);
  const countUp = (step: number) => {
    setCount((count) => count + step);
  };

  // 쓰기 전용 atom(로직을 atom에 정의)
  const countDown = useSetAtom(countDownAtom);

  return ( 
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countDown(1) }>-1</button>
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;