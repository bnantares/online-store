import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/CartSlice';
import { productAPI } from "../services/ProductService";
import { filterReducer } from "./reducers/FilterSlice";

const rootReducer = combineReducers({
    cartReducer,
    filterReducer: filterReducer.filter,
    [productAPI.reducerPath]: productAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];