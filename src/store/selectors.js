import { selector } from "recoil";
import { requester } from "../services/requester";

export const selectorGetRatingUsers = selector({
  key: "GetRatingUsers",
  get: async () => {
    const { data } = await requester({
      baseURL: "https://randomuser.me/api/",
    }).get("?results=3");

    const results = data?.results;

    return results;
  },
});
