import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWares = [logger];

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
