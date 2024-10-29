import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/ProductSlice'
import cartReducer from './reducers/CartSlice'
import { productAPI } from "../services/ProductService";
import { cartAPI } from "../services/CartService";

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    [productAPI.reducerPath]: productAPI.reducer, // Ключом путь, значением сам редьюсер? Не оч понятно
    [cartAPI.reducerPath]: cartAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware, cartAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];