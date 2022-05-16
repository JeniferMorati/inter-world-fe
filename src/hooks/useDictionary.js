import { useContext } from "react";

// context
import { AppContext } from '../context';

export const useDictionary = () => {
  const { dictionary } = useContext(AppContext);

  return dictionary;
}