import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers/index';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        return [
            ...getDefaultMiddleware(),
            thunk,
            logger
        ];
    }
});

export default store;
