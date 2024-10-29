import axios from "axios";
import { IProduct } from "../models/IProduct";
import { ICart } from "../models/ICart";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(`Не удалось получить данные: ${e}`)
        }
        
    }
)

export const fetchCart = createAsyncThunk(
    'cart/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICart>('https://fakestoreapi.com/carts/1');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(`Не удалось получить данные: ${e}`)
        }
        
    }
)