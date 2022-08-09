import { combineReducers } from "redux";
import authReducer from "./authReducers";
import { productReducers, selectedProductReducers } from "./productReducers";

const reducers = combineReducers({
	allProduct: productReducers,
	product: selectedProductReducers,
	authType: authReducer
});

export default reducers;
