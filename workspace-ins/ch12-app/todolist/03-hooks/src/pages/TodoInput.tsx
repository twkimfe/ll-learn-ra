import { useRef, useState, type KeyboardEvent } from "react";

interface TodoInputProps {
  addItem: (title: string) => void;
}

function TodoInput({ addItem }: TodoInputProps){
  console.log('\t\tTodoInput 렌더링');

  const [title, setTitle] = useState('');
  // TODO 3. useRef를 사용해서 input 요소에 포커스가 갈수 있게 처리
  const inputRef = useRef<HTMLInputElement>(null);

  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    if(title.trim() !== ''){
      addItem(title);
      setTitle('');
      // 포커스 추가
      inputRef.current?.focus();
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (event: KeyboardEvent) => {
    if(event.nativeEvent.isComposing) return; // 글자가 완성되지 않았을 경우 무시한다.(Mac 사용자)
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      <input ref={ inputRef } type="text" autoFocus value={ title } onChange={ (e) => setTitle(e.target.value) } onKeyDown={ handleAddKeydown } />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput;