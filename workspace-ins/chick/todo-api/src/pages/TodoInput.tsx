import { useRef, useState } from "react";
import useAxiosInstance from "../hooks/useAxiosInstance";

interface TodoInputPropType {
  fetchList: () => void;
}

function TodoInput({ fetchList }: TodoInputPropType) {

  console.log('### TodoInput 호출됨.');

  // 제어 컴포넌트 1. state 정의
  const [ title, setTitle ] = useState('');

  const axiosInstance = useAxiosInstance();

  const inputRef = useRef<HTMLInputElement>(null);

  // 추가 버튼 클릭 이벤트 처리
  const handleAdd = async () => {
    console.log(`${title} 추가`);
    

    await axiosInstance.post('/todolist', {
      title,
      content: title
    });

    fetchList();

    setTitle('');
    inputRef.current?.focus();
  };

  // 엔터 이벤트 처리
  const handleAddKeydown = (event: React.KeyboardEvent) => {
    if(event.nativeEvent.isComposing) return; // 글자가 미완성일 경우 무시한다.
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      {/* 제어 컴포넌트 2. value를 state로 지정 */}
      {/* 제어 컴포넌트 3. onChange 이벤트에서 setState 호출 */}
      <input 
        ref={ inputRef } 
        type="text" 
        value={ title } 
        onChange={ e => setTitle(e.target.value) } 
        onKeyDown={ handleAddKeydown } 
        autoFocus />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput;