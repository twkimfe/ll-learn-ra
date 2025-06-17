import { useRef, useState } from "react";

// TODO 커스텀 훅으로 수정
function useCounter(initCount: number) {
  const [ count, setCount ] = useState(0);
  const stepRef = useRef(initCount);

  const down = () => {
    setCount(count - stepRef.current);
  };
  const up = () => {
    setCount(count + stepRef.current);
  };
  const reset = () => {
    setCount(initCount);
  };

  return { count, stepRef, down, up, reset };
}

export default useCounter;