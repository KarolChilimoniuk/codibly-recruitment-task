import { Dispatch } from "redux";
import { fetchItem } from "../services/itemsApi/fetchItem";
import { fetchItems } from "../services/itemsApi/fetchItems";

export const submitHandler = (
  e: React.FormEvent<HTMLFormElement>,
  dispatch: Dispatch,
  inputValue: string
): void => {
  e.preventDefault();
  inputValue !== "" && fetchItem(dispatch, inputValue);
  inputValue === "" && fetchItems(dispatch, 1);
};
