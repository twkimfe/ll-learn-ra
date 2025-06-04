import { useState, type KeyboardEvent } from "react";

interface TodoInputProps {
  addItem: (title: string) => void;
}

function TodoInput({ addItem }: TodoInputProps){

  // 리렌더링 되면 일반 input 요소의 값은 사라지므로 state로 관리
  // 사용자 입력을 다루는 경우에는 대부분 state로 관리(value 속성을 추가, onChange 이벤트로 value 수정)
  const [title, setTitle] = useState('');

  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    console.log('추가 버튼 클릭');
    if(title.trim() !== ''){
      addItem(title);
      setTitle('');
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (event: KeyboardEvent) => {
    console.log('keydown', event);
    if(event.nativeEvent.isComposing) return; // 글자가 완성되지 않았을 경우 무시한다.(Mac 사용자)
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      <input type="text" autoFocus value={ title } onChange={ (e) => setTitle(e.target.value) } onKeyDown={ handleAddKeydown } />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput;