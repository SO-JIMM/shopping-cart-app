// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getProductById: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
    getProductCategories: builder.query({
      query: () => "/products/products/categories",
    }),
    getProductsInCategory: builder.query({
      query: (category) => `/products/category/search?q=${category}`,
    }),
    updateProduct: builder.mutation({
      query(product) {
        return {
          url: `/products/${product.id}`,
          method: "PUT",
          body: product,
        }
      },
    }),
    deleteProduct: builder.mutation({
      query(product) {
        return {
          url: `products/${product.id}`,
          method: "DELETE",
          body: product,
        }
      },
    }),
  }),
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetAllProductsQuery, useGetProductByIdQuery } = apiSlice

/*

var axios = require("axios")
var data = JSON.stringify({
  collection: "products",
  database: "fakestore",
  dataSource: "FreeCluster",
  projection: {
    _id: 1,
  },
})

var config = {
  method: "post",
  url: "https://data.mongodb-api.com/app/data-xnrip/endpoint/data/v1/action/findOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":

  },
  data: data,
}

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
*/
