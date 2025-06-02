import Reaction from '../reaction.js';
// Counter 컴포넌트
function Counter(){
  console.log('\tCounter 호출됨');
  // let count = 0;

  // const state = Reaction.useState(0);
  // const count = state[0];
  // const setCount = state[1];

  const [ count, setCount ] = Reaction.useState(0);

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
  const handleReset = event => {
    // 데이터 갱신, count 값 초기화
    setCount(0);
  };

  return (
    Reaction.createElement('div', { id: 'counter' }, 
      Reaction.createElement('button', { type: 'button', onclick: handleDown }, '-'), 
      Reaction.createElement('button', { type: 'button', onclick: (event) => handleReset(event) }, 0), 
      Reaction.createElement('button', { type: 'button', onclick: handleUp }, '+'), 
      Reaction.createElement('span', null, count))
  );
}

export default Counter;