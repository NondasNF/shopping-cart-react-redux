import { combineReducers } from "@reduxjs/toolkit";
import basketReducer from "./basketReducer";
import shopReducer from "./shopReducer";

export default combineReducers({
basket: basketReducer,
shop: shopReducer
});
 