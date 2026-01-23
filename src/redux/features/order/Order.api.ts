import { baseApi } from "@/redux/baseApi";

export const Orderapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    allOrder: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
      providesTags: ['PRODUCT'],
      //   transformResponse: (arg) => arg.data,
    }),
    Order: builder.mutation({
      query: (order) => {
        return {
          url: '/product/order',
          method: 'POST',
          data: order
        };
      },
      invalidatesTags: ['PRODUCT'],
    }),
    updateOrder: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/order/${id}`,
        method: "PATCH",
        data: updatedData
      }),
      invalidatesTags: ['PRODUCT'],
    }),
    confirmOrder: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/order/orderconfirm/${id}`,
        method: "PATCH",
        data: updatedData
      }),
      invalidatesTags: ['PRODUCT'],
    }),
    confirmOrdernonUser: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/order/orderconfirmnonuser/${id}`,
        method: "PATCH",
        data: updatedData
      }),
      invalidatesTags: ['PRODUCT'],
    }),
    deleteOrder: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/order/${id}`,
        method: "DELETE",
        data: updatedData

      }),
      invalidatesTags: ['PRODUCT'],
    }),
    AdminupdateOrder: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/order/admin/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['PRODUCT'],
    }),
     allOrderForAdmin: builder.query({
      query: () => ({
        url: "/order/admin",
        method: "GET",
      }),
      providesTags: ['PRODUCT'],
      //   transformResponse: (arg) => arg.data,
    }),

  }),
});


export const { useDeleteOrderMutation,useAllOrderForAdminQuery,useAdminupdateOrderMutation, useAllOrderQuery, useUpdateOrderMutation, useOrderMutation, useConfirmOrderMutation, useConfirmOrdernonUserMutation } = Orderapi
