import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../models/IProduct";
import { fetchProducts } from "./ActionCreatosrs";

interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    count: 0
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled.type, (state, action: PayloadAction<IProduct[]>) => {
                state.isLoading = false;
                state.error = '';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected.type, (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export default productSlice.reducer;