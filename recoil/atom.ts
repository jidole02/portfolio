import { atom } from "recoil";

export const themaState = atom<"light" | "dark">({
  key: "themaState",
  default: "dark",
});

export const scrollY = atom({
  key: "scrollValue",
  default: 0,
});
