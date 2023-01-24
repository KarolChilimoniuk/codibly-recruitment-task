import { Dispatch } from "redux";
import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from "./actionTypes";
import { IItem } from "../interfaces/interfaces";
import { ItemActionSuccess, ItemActionFailure } from "../types/types";

export const getItems = (dispatch: Dispatch) => {
  //   return (dispatch) {
  //     try {
  //     } catch(err) {
  //         return err;
  //     }
  //   }
};

export const getItemsSuccess = (items: Array<IItem>): ItemActionSuccess => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payloads: items,
  };
};

export const getItemsFailure = (status: number): ItemActionFailure => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payloads: status,
  };
};
