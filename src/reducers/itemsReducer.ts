import { AnyAction } from "redux";
import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  SET_VALUE_TO_FILTER_ITEMS,
} from "../actions/actionTypes";
import { IAppState } from "../interfaces/interfaces";

const initState: IAppState = {
  itemsData: { page: 0, per_page: 0, total: 0, total_pages: 0, data: [] },
  filteredItem: null,
  statusCode: 0,
  statusMessage: "",
  filterValue: "",
};

const itemsReducer = (
  state: IAppState = initState,
  action: AnyAction
): IAppState => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        itemsData: {
          page: action.payloads.itemsData.page,
          per_page: action.payloads.itemsData.per_page,
          total: action.payloads.itemsData.total,
          total_pages: action.payloads.itemsData.total_pages,
          data: action.payloads.itemsData.data,
        },
        statusCode: action.payloads.statusCode,
        statusMessage: action.payloads.statusMessage,
        filteredItem: null,
        filterValue: "",
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        statusCode: action.payloads.statusCode,
        statusMessage: action.payloads.statusMessage,
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        statusCode: action.payloads.statusCode,
        statusMessage: action.payloads.statusMessage,
        filteredItem: action.payloads.filteredItem,
      };
    case FETCH_ITEM_FAILURE:
      return {
        ...state,
        statusCode: action.payloads.statusCode,
        statusMessage: action.payloads.statusMessage,
      };
    case SET_VALUE_TO_FILTER_ITEMS:
      return {
        ...state,
        filterValue: action.payloads,
      };
    default:
      return {
        ...initState,
      };
  }
};

export default itemsReducer;
