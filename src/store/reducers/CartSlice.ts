import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProductItem } from "../models/ICart";
import { fetchCart } from "./ActionCreators";
import { CartActionTypes } from "../models/CartActionTypes";

const ADD_ITEM = createAction<ICartProductItem>(CartActionTypes.ADD_ITEM);

interface CartState {
    cart: ICart;
    isLoading: boolean;
    error: string;
}

const initialState: CartState = {
    cart: {
        id: 1,
        userId: 1,
        products: [{
            productId: 1,
            quantity: 1
        }]
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
            // .addCase(fetchCart.pending.type, (state) => {
            //     state.isLoading = true;
            // })
            // .addCase(fetchCart.fulfilled.type, (state, action: PayloadAction<ICart>) => {
            //     state.isLoading = false;
            //     state.error = '';
            //     state.cart = action.payload;
            // })
            // .addCase(fetchCart.rejected.type, (state, action: PayloadAction<string>) => {
            //     state.isLoading = false;
            //     state.error = action.payload;
            // })
            .addCase(ADD_ITEM, (state, action: PayloadAction<ICartProductItem>) => {
                state.isLoading = false;
                state.error = '';
                // state.cart = action.payload;
                state.cart.products.push(action.payload)
            })
    },
})

export default cartSlice.reducer