import { countAtom } from "@/jotai/atoms";
import { atom } from "jotai";

export const doubleCountAtom = atom((get) => get(countAtom) * 2);
export const dualDoubleCountAtom = atom((get) => get(doubleCountAtom) * 2);