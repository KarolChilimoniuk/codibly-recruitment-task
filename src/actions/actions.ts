import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  CHANGE_PAGE_NUMBER,
} from "./actionTypes";
import { IItem, IItemsData } from "../interfaces/interfaces";
import {
  ItemActionFetchItemsSuccess,
  ItemActionFetchItemsFailure,
  ItemActionFetchOneItemSuccess,
  ItemActionFetchOneItemFailure,
  ChangePageNumber,
} from "../types/types";

export const getItemsSuccess = (
  data: IItemsData,
  statusCode: number,
  statusMessage: string
): ItemActionFetchItemsSuccess => {
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
): ItemActionFetchItemsFailure => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payloads: { statusCode: statusCode, statusMessage: statusMessage },
  };
};

export const getItemSuccess = (
  data: IItem,
  statusCode: number,
  statusMessage: string
): ItemActionFetchOneItemSuccess => {
  return {
    type: FETCH_ITEM_SUCCESS,
    payloads: {
      filteredItem: data,
      statusCode: statusCode,
      statusMessage: statusMessage,
    },
  };
};

export const getItemFailure = (
  statusCode: number,
  statusMessage: string
): ItemActionFetchOneItemFailure => {
  return {
    type: FETCH_ITEM_FAILURE,
    payloads: { statusCode: statusCode, statusMessage: statusMessage },
  };
};

export const changePageNumber = (page: number): ChangePageNumber => {
  return {
    type: CHANGE_PAGE_NUMBER,
    payloads: page,
  };
};
