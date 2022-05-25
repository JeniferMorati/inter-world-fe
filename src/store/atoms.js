import { atom } from "recoil";

// storage: localStorage
import { localStorageEffect } from "../utils/localStorageEffect";

export const atomCurrentUser = atom({
  key: "atomCurrentUser",
  default: undefined,
  effects: [localStorageEffect("current-user")],
});
