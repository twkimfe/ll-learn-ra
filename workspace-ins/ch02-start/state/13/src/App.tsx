import { useState } from 'react';
import './App.css';

function App(){
  console.log('App 렌더링');
  const [ position, setPosition ] = useState({ x: 50, y: 150 });
  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div className="container" onPointerMove={ event => {
        console.log(event.pageX, event.pageY);

        // 리렌더링이 되지 않음(객체의 속성만 수정)
        // position.x = event.pageX;
        // position.y = event.pageY;

        // 레렌더링 됨(새로운 객체로 생성)
        const newPosition = {
          x: event.pageX,
          y: event.pageY
        };
        setPosition(newPosition);
      } }></div>
      <div className="circle" style={{ pointerEvents: 'none', transform: `translate(${position.x}px, ${position.y}px)` }}></div>
    </>
  );
}

export default App;