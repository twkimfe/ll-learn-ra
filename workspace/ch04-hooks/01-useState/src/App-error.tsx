// TODO 1. 메세지를 입력하면 입력 메세지에 반영되도록 수정

import { useState } from "react";

function App() {
  const [msg, setMsg] = useState('');

  return (
    <>
      <h1>01 useState - 상태 관리</h1>
      <div>
        <input type="text" value={msg} />
        <br />
        <span>입력 메세지: {msg}</span>
      </div>
    </>
  );
}

export default App
