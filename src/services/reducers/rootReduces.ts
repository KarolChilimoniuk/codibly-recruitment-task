import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({ itemsData: itemsReducer });

export default rootReducer;
