import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReduces";

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
