import { useState } from 'react';
import './App.css'

function App() {
  const [position, setPosition] = useState({ x: 50, y: 150})

  return (
    <>
      <h1>13 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div className="container" onPointerMove={
        event => {
          console.log(event.pageX, event.pageY);

          // 리렌더링 되지 않음, 객체일 때 속성 값을 바꾸면 안됨
          // position.x = event.pageX;
          // position.y = event.pageY;
          
          // 리렌더링 됨(새로운 객체로 생성)
          const newPosition = {
            x: event.pageX-10,
            y: event.pageY-85
          }
          setPosition(newPosition)
        }
      }>
        <div className="circle" style={{ transform: `translate(${position.x}px, ${position.y}px)`}}
        ></div>
      </div>
    </>
  )
}

export default App
