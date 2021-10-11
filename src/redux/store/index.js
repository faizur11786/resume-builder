import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import reducers from "../reducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "resume-builder",
    storage: storage,
};

const persistedReducer = persistReducer( persistConfig, reducers );


export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware( logger, thunk )
    )
);

export const persistor = persistStore( store );