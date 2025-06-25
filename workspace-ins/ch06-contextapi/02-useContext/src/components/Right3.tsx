import { CounterContext } from '@/contexts/CounterContext';
import { useContext, useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // 2. Context 사용하기
  const { countUp } = useContext(CounterContext);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;