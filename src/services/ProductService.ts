import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../store/models/IProduct";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    tagTypes: ['Product'],
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], number>({
            query: (limit: number = 5) => ({
                url: '/products',
                params: {
                    limit: limit
                }
            }),
            providesTags: result => ['Product']
        }),
        fetchSpecificProduct: build.query<IProduct, number>({
            query: (id: number) => ({
                url: `/products/${id}`
            })
        })
    })
})