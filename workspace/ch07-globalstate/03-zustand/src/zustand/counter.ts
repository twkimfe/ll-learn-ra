import { create } from 'zustand'

const useCounterStore = create((set, get)=> ({
  // 상태값 초기화
  count: 5,

  // 상태 변경 함수
  countReset: () => {
    set({ count: 0 });
  },

  countDown: (step: number) => {},
    // set({ count: get() });

  countUp: () => {}
}));
