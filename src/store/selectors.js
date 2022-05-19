import { selector } from "recoil";
import { requester } from "../services/requester";

export const selectorGetRatingUsers = selector({
  key: "GetRatingUsers",
  get: async () => {
    const { data } = await requester({
      baseURL: "https://randomuser.me/api/",
    }).get("?results=3&nat=br");

    const results = data?.results;

    return results;
  },
});

export const selectorGetCountrys = selector({
  key: "GetCountrys",
  get: async () => {
    const { data } = await requester({
      baseURL: "https://restcountries.com",
    }).get("/v3.1/all");

    return data;
  },
});
