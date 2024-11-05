import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICart } from "../store/models/ICart";

export const cartAPI = createApi({
    reducerPath: 'cartAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    tagTypes: ['Cart'],
    endpoints: (build) => ({
        fetchCart: build.query<ICart, number>({
            query: (id: number) => ({
                url: `/carts/${id}`
            })
        })
    })
})