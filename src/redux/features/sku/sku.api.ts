import { baseApi } from "@/redux/baseApi";

export const skuapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
 
    allsku: builder.query({
      query: () => ({
        url: "/sku",
        method: "GET",
      }),
      transformResponse: (arg) => arg.data,
    }),
    
  }),
});


export const { useAllskuQuery} = skuapi
