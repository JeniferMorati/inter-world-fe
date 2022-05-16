import merge from "deepmerge";

import defaultDictionary from "./default";
import englishDictionary from "./english";

const selectDictionary = (language) => {
  let selectedlanguage;

  switch (language.toUpperCase()) {
    case "US":
      selectedlanguage = englishDictionary();
      break;

    default:
      selectedlanguage = {};
      break;
  }

  const overwriteMerge = (destinationArray, sourceArray, options) =>
    sourceArray;

  return merge(defaultDictionary(), selectedlanguage, {
    arrayMerge: overwriteMerge,
  });
};

export default selectDictionary;
