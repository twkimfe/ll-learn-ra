import { create } from 'zustand';

interface CounterState {
  count: number;
  countReset: () => void;
  countDown: (step: number) => void;
  countUp: (step: number) => void;
  getCount: () => number;
}

const useCounterStore = create<CounterState>((set, get) => ({
  // 상태값 초기화
  count: 5,

  // 상태 변경 함수
  countReset: () => {
    // 새로운 상태 객체를 지정
    // 전달된 속성만 교체(count)
    set({ count: 0 });
  },

  countDown: (step) => {
    set({ count: get().count - step });
  },

  // countUp: (step) => set({ count: get().count + step }),
  countUp: (step) => set((state) => ({ count: state.count + step })),

  // 현재 count 값 반환
  getCount: () => get().count,
}));

export default useCounterStore;