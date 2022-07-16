import { combineReducers } from "redux";
import { productReducers, selectedProductReducers } from "./productReducers";

const reducers = combineReducers({
  allProduct:productReducers,
  product:selectedProductReducers
})

export default reducers;