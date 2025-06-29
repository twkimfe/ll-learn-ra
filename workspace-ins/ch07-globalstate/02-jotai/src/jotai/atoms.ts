import { atom } from 'jotai';

// Read-write atom
export const countAtom = atom(6); // 상태 하나를 정의

// const _countAtom = atom(6);
// // getter/setter 직접 제공
// export const countAtom = atom(
//   (get) => get(_countAtom), // read 함수
//   (get, set, value: number) => {
//     if(value >= 0){
//       set(_countAtom, value);
//     }
//   }, // write 함수를 지정하지 않으면 읽기 전용
// ); // 상태 하나를 정의

// Write-only atom
export const countDownAtom = atom(
  null, // read 함수 - null일 경우 "읽기 불가능"을 의미
  (get, set, step: number) => {
    const count = get(countAtom);
    set(countAtom, count - step);
  } // write 함수
);