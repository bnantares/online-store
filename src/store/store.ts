import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import productReducer from './reducers/ProductSlice' мы не будем использовать productReducer, потому что не планируем менять состояние товаров на продажу (пока что, чтобы не путаться в процессе оубчения)
import cartReducer from './reducers/CartSlice'
import cartSlice from './reducers/CartSlice'
import { productAPI } from "../services/ProductService";
// import { cartAPI } from "../services/CartService"; cartAPI мы так же пока не будем использовать, потому что не будем пушить данные на сервер, будем просто сохранять данные корзины в локальный store с помощью экшенов

const rootReducer = combineReducers({
    // productReducer,
    cartReducer,
    [productAPI.reducerPath]: productAPI.reducer,
    // [cartAPI.reducerPath]: cartAPI.reducer
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