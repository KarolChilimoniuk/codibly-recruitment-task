import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from "./actionTypes";
import { IItemsData } from "../interfaces/interfaces";
import { ItemActionSuccess, ItemActionFailure } from "../types/types";

export const getItemsSuccess = (
  data: IItemsData,
  statusCode: number,
  statusMessage: string
): ItemActionSuccess => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payloads: {
      itemsData: data,
      statusCode: statusCode,
      statusMessage: statusMessage,
    },
  };
};

export const getItemsFailure = (
  statusCode: number,
  statusMessage: string
): ItemActionFailure => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payloads: { statusCode: statusCode, statusMessage: statusMessage },
  };
};
