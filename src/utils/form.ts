import { Dispatch } from "redux";
import { setValueToFilterItems } from "../actions/actions";

export const submitHandler = (
  e: React.FormEvent<HTMLFormElement>,
  dispatch: Dispatch,
  inputValue: string
): void => {
  e.preventDefault();
  dispatch(setValueToFilterItems(inputValue));
};
