import { useEffect } from 'react';

function Right3({ countUp }: { countUp: (step: number) => void }) {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={ () => countUp(1) }>+1</button>
    </div>
  );
}

export default Right3;