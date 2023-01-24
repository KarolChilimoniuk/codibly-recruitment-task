import { AnyAction } from "redux";
import { ItemsState } from "../types/types";

const initState: ItemsState = {
  items: [],
  status: 200,
};

const itemsReducer = (state: ItemsState = initState, action: AnyAction) => {
  switch (action.type) {
    case action.FETCH_ITEMS_SUCCESS:
      return {
        ...initState,
        items: action.payloads,
      };
    case action.FETCH_ITEMS_FAILURE:
      return {
        ...initState,
        status: action.payloads,
      };
    default:
      return {
        ...initState,
      };
  }
};

export default itemsReducer;
