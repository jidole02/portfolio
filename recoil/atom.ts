import { atom } from "recoil";

export const themaState = atom<"light" | "dark">({
  key: "themaState",
  default: "dark",
});
