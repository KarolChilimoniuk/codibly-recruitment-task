import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({ fetchedData: itemsReducer });

export default rootReducer;
