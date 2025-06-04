import { useState, type KeyboardEvent } from "react";
//{ addItem } 구조분해할당 문법
interface TodoInputProps {
  addItem: (title: string) => void;
}

function TodoInput({ addItem }: TodoInputProps) {

  // 리렌더링 시 일반 input 요소 값은 사라짐, state로 관리
  const [title, setTitle] = useState('')

  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    console.log("추가 버튼 클릭");
    if(title.trim() !== ''){
      addItem(title);
      setTitle('')
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (event: KeyboardEvent) => {
    console.log("keydown", event);
    if (event.nativeEvent.isComposing) return;
    //글자가 완성되지 않았을 때, 무시한다(Mac 유저 고려)
    if (event.key === "Enter") handleAdd();
  };

  return (
    <div className="todoinput">
      <input type="text" autoFocus value={ title } onChange={ (e)=> setTitle(e.target.value) } onKeyDown={handleAddKeydown} />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;