import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/CartSlice'
import { productAPI } from "../services/ProductService";

const rootReducer = combineReducers({
    cartReducer,
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