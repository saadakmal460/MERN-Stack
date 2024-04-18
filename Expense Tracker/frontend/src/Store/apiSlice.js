import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:5000';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: builder => ({
        //get Categories
        getCategories: builder.query({
            query: () => `tracks/api/categories`,
            providesTags: ["categories"]
            
        }),

        //get Labels
        getLabels: builder.query({
            query: () => `tracks/api/getLabel`,
            providesTags: ['transaction']
        }),

        //Add Transaction
        addTransaction: builder.mutation({
            query: (transactionData) => ({
                url: `tracks/api/transaction`,
                method: "POST",
                body: transactionData
            }),
            invalidatesTags: ['transaction']
        }),

        //DeleteRecord
        deleteTransaction: builder.mutation({
            query: (recordId) => ({
                url: `tracks/api/deleteTransaction/${recordId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['transaction']
        })
    }),
});



export default apiSlice;
