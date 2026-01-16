import { baseApi } from "@/redux/baseApi";

export const productapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (addProduct) => {
        return {
          url: '/product/create-product',
          method: 'POST',
          data: addProduct
        };
      },
      invalidatesTags: ['PRODUCT'],
    }),
    allproduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      transformResponse: (arg) => arg.data,
    }),
     allpstock: builder.query({
      query: () => ({
        url: "/pricestocks",
        method: "GET",
      }),
      transformResponse: (arg) => arg.data,
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['PRODUCT'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        data: updateData
      }),
      invalidatesTags: ['PRODUCT'],
    }),
    productDetails: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      transformResponse: (arg) => arg.data.data,
    }),
    
  }),
});


export const { useAllpstockQuery,useAllproductQuery,useProductDetailsQuery, useCreateProductMutation,useDeleteProductMutation } = productapi
