import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './reducers/ProductSlice'
import { productAPI } from "../services/ProductService";

const rootReducer = combineReducers({
    productReducer,
    [productAPI.reducerPath]: productAPI.reducer // Ключом путь, значением сам редьюсер? Не оч понятно
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