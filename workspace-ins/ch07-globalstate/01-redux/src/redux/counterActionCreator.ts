export const COUNTER_ACTION = {
  UP: 'countUp',
  DOWN: 'countDown',
  RESET: 'countReset'
};

// Store에 전달할 액션을 생성해서 반환
// Store에서 다시 Reducer로 전달
// action 예시 { type: 'countUp', payload: { step: 2 } }
const counterActionCreator = {
  countUp: (step: number) => ({ type: COUNTER_ACTION.UP, payload: { step } }),
  countDown: (step: number) => ({ type: COUNTER_ACTION.DOWN, payload: { step } }),
  countReset: () => ({ type: COUNTER_ACTION.RESET })
};

export default counterActionCreator;