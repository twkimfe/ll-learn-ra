import { useState } from "react";

function TodoInput() {

  console.log('### TodoInput 호출됨.');

  // 제어 컴포넌트 1. state 정의
  const [ title, setTitle ] = useState('');

  // 추가 버튼 클릭 이벤트 처리
  const handleAdd = () => {
    console.log(`${title} 추가`);
    
  };

  return (
    <div className="todoinput">
      {/* 제어 컴포넌트 2. value를 state로 지정 */}
      {/* 제어 컴포넌트 3. onChange 이벤트에서 setState 호출 */}
      <input type="text" value={ title } onChange={ e => setTitle(e.target.value) } autoFocus />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput;