import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

//degug purpose, can be remove
// const logger = (store) => (next) => (action) => {
// 	console.log("previous state", store.getState());
// 	console.log("dispatching", action);
// 	next(action);
// 	console.log("next state", store.getState());
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
	// compose(
	// 	applyMiddleware(thunk, logger)
	// 	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	// )
);

export default store;
