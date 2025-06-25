import { createContext, useState } from "react";

interface CounterContextType {
  count: number;
  countUp: (step: number) => void;
  reset: () => void;
  countDown: (step: number) => void;
}

// 1. Context 객체 생성
const CounterContext = createContext<CounterContextType>({
  count: 100,
  countUp: () => {},
  reset: () => {},
  countDown: () => {},
});

// 3. Provider 컴포넌트를 만들어서 export
export function CounterProvider({ children }: { children: React.ReactNode }){
  // 4. 상태 관련 작업을 정의
  const [ count, setCount ] = useState(3);

  const countUp = (step: number) => {
    setCount(count + step);
  }
  const reset = () => {
    setCount(0);
  };
  const countDown = (step: number) => {
    setCount(count - step);
  };

  const value = { count, countUp, reset, countDown };

  return (
    <CounterContext value={ value }>
      { children }
    </CounterContext>
  );
}


export default CounterContext;