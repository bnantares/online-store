import axios from "axios";
import { Dispatch } from "redux"
import { ICart, ICartProductItem } from "../models/ICart";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartAction, CartActionTypes } from "../models/CartActionTypes";

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

export const addToCart = (product: ICartProductItem) => {
    return (dispatch: Dispatch<CartAction>) => {
        try {
            dispatch({type: CartActionTypes.ADD_ITEM, payload: product})
        } catch (error) {
            console.log(`Возникла ошибка! ${error}`)
        }
    }
}