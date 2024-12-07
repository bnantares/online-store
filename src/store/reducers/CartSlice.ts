import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProductItem } from "../models/ICart";
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
    // extraReducers(builder) {
    //     builder
    //         .addCase(ADD_ITEM, (state, action: PayloadAction<ICartProductItem>) => {
    //             state.isLoading = false;
    //             state.error = '';
    //             state.cart.products.push(action.payload)
    //         })
    // },
})

export default cartSlice.reducer