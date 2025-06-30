import { countAtom } from "@/jotai/atoms";
import { atom } from "jotai";

export const doubleCountAtom = atom((get)=> get(countAtom));
