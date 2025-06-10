// 지정한 수가 소수인지 여부를 반환
const isPrime = function(num: number){
  console.time('소요 시간');
  console.log('소수 판별 시작.', num);

  // 소수 판별 코드
  let prime = num > 1; // 1은 소수가 아님

  for(let i=2; i<num; i++){
    if(num % i === 0){
      prime = false;
      break;
    }
  }

  console.log('소수 판별 결과.', prime);
  console.timeEnd('소요 시간');
  return prime;
};

function App() {
  console.log('App 렌더링.');

  // TODO name이 바뀔때 리렌더링이 필요하지만 소수 계산은 다시 할 필요 없음
  // num이 바뀔때만 다시 계산하고 num이 바뀌지 않으면 메모이제이션 된 값을 반환해야 함
  
  
  return (
    <>
      <h1>05 useMemo - 함수의 반환값을 memoize</h1>
      <div>
        <input type="text" />가 좋아하는 숫자: 
        <input type="number" min="1" max="1000000007" />
        <div>GD가 좋아하는 숫자 1000000007: 소수가 <span style={{color: 'blue'}}>맞습니다.</span><span style={{color: 'red'}}>아닙니다.</span></div>
      </div>
    </>
  );
}

export default App
