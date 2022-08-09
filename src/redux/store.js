import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

// const store = createStore(
// 	reducers,
// 	{},
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// 	// compose(applyMiddleware(thunk)),
// );
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
