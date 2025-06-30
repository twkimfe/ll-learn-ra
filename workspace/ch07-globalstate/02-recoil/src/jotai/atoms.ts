import { atom } from 'jotai'

// Read-write atom
export const countAtom = atom(6)

export const getCountAtom = atom(
  (get) => get(countAtom),
)

// Write-only atom
export const countDownAtom = atom(
  null,
  (get, set, step: number)=> {
    const count = get(countAtom);
    set(countAtom, count - step);
  }
)