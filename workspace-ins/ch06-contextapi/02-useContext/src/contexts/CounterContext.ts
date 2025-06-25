import { createContext } from "react";

interface CounterContextType {
  count: number;
  countUp: (step: number) => void;
}

// 1. Context 생성
export const CounterContext = createContext<CounterContextType>({
  count: 0,
  countUp: () => {
    console.log('초기화만 되었음. 실제 함수 구현 안됨.');
  }
});