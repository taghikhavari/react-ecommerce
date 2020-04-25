import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

const middleWares = [logger];

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleWares))
);

// @ts-ignore
export const persistor = persistStore(store);
