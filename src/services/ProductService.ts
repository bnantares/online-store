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
        }),
        fetchCartProducts: build.query<IProduct[], number[]>({
            async queryFn(productIds, api, extraOptions, baseQuery) {
                const results = await Promise.all(productIds.map(productId => baseQuery(`/products/${productId}`)));
                const merged = [].concat(...results.map(result => result.data));
	            const errors = [].concat(...results.filter(result => result.error != null).map(result => result.error));

	            if (errors.length > 0)
	                return { error: errors };            
	            return { data: merged };
            },
        })
    })
})