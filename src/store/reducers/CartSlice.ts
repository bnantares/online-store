import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProductItem } from "../models/ICart";

interface CartState {
    cart: ICart;
    isLoading: boolean;
    error: string;
}

const initialState: CartState = {
    cart: {
        id: 1,
        userId: 1,
        products: []
    },
    isLoading: false,
    error: '',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartProductItem>) => {
            state.isLoading = false;
            state.error = '';
            state.cart.products.push(action.payload)
        }
    },
})

export default cartSlice.reducer