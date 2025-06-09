import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          console.log("click handler start", count);
          
          // setter 함수가 호출되는 즉시 리렌더링이 되지 않고 성능 최적화를 위해 모아 두었다가 한번에 반영(배치)
          setCount(count + 1); // 0 + 1
          
          // 리액트가 콜백 함수의 리턴값을 저장해 두었다가 다음에 호출되는 콜백 함수의 인자로 전달함
          /*
          setCount(num => num + 1); // 0 + 1
          setCount(num => num + 1); // 1 + 1
          setCount(num => num + 1); // 2 + 1
          */
         
          console.log("click handler end", count);
        }}
      >+1</button>
    </>
  );
}

export default App;
