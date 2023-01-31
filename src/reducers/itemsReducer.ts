import { AnyAction } from "redux";
import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  CHANGE_PAGE_NUMBER,
} from "../actions/actionTypes";
import { IAppState } from "../interfaces/interfaces";

const initState: IAppState = {
  itemsData: { page: 0, per_page: 0, total: 0, total_pages: 0, data: [] },
  itemsToDisplay: null,
  pageNumber: 1,
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
        ...state,
        itemsData: {
          page: action.payloads.itemsData.page,
          per_page: 5,
          total: action.payloads.itemsData.total,
          total_pages: action.payloads.itemsData.total_pages,
          data: action.payloads.itemsData.data,
        },
        itemsToDisplay: action.payloads.itemsData.data,
        statusCode: action.payloads.statusCode,
        statusMessage: action.payloads.statusMessage,
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
        itemsToDisplay: [action.payloads.filteredItem],
        pageNumber: 1,
      };
    case FETCH_ITEM_FAILURE:
      return {
        ...state,
        statusCode: action.payloads.statusCode,
        statusMessage: action.payloads.statusMessage,
      };
    case CHANGE_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payloads,
      };
    default:
      return {
        ...initState,
      };
  }
};

export default itemsReducer;
