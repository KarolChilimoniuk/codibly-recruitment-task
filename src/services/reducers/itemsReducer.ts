import { AnyAction } from "redux";
import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "../actions/actionTypes";
import { IAppState } from "../interfaces/interfaces";

const initState: IAppState = {
  itemsData: { page: 0, per_page: 0, total: 0, total_pages: 0, data: [] },
  statusCode: 0,
  statusMessage: "",
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
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        statusCode: action.payloads.statusCode,
        statusMessage: action.payloads.statusMessage,
      };
    default:
      return {
        ...initState,
      };
  }
};

export default itemsReducer;
