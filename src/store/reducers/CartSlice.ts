import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "../models/ICart";
import { fetchCart } from "./ActionCreators";

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
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCart.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCart.fulfilled.type, (state, action: PayloadAction<ICart>) => {
                state.isLoading = false;
                state.error = '';
                state.cart = action.payload;
            })
            .addCase(fetchCart.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export default cartSlice.reducer