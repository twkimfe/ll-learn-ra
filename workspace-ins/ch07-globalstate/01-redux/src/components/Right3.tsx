import counterActionCreator from '@/redux/counterActionCreator';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { countUp, countDown, countReset } from '@/RTK/counterSlice';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h3>Right3</h3>
      {/* Redux 사용할 경우 */}
      {/* <button onClick={ () => dispatch(counterActionCreator.countDown(3)) }>-3</button>
      <button onClick={ () => dispatch(counterActionCreator.countReset()) }>0</button>
      <button onClick={ () => dispatch(counterActionCreator.countUp(3)) }>+3</button> */}

      {/* RTK 사용할 경우 */}
      <button onClick={ () => dispatch(countDown(3)) }>-3</button>
      <button onClick={ () => dispatch(countReset()) }>0</button>
      <button onClick={ () => dispatch(countUp(3)) }>+3</button>
    </div>
  );
}

export default Right3;