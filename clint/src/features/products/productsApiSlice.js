// crteate all products  api slice

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosApi/api";
//import { useParams } from "react-router-dom"

//this is get all products
export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async ({page} ) => {
    console.log(page);
   
    try {
      const response = await API.get(`/product?page=${page}`);
     

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//this is get single products
export const getSingleProducts = createAsyncThunk(
  "allProducts/getSingleProducts",
  async (params) => {
    try {
      const response = await API.get(`/product/getsingleproduct/${params}`);
      
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// this is product create api slice

export const createProduct = createAsyncThunk(
  "allProduct/createProduct ",
  async (data) => {
    try {
      const response = await API.post("/product", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// this is product update api slice

export const updateProductApiSlice = createAsyncThunk(
  "allProduct/updateProductApiSlice",
  async (data) => {
    console.log(data);
    try {
      const response = await API.patch(`/product/${data.id}`, data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return { data: response.data, id: data.id };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// this is delete product api slice

export const deleteProductApiSlice = createAsyncThunk(
  "allProducr/deleteProductApiSlice",
  async (id) => {
    try {
      const response = await API.delete(`/product/${id}`);

      return { data: response.data, id: id };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// this is productfilter api slice

export const productFilterApiSlice = createAsyncThunk(
  "allProducr/productFilterApiSlice",
  async (id) => {
    try {
      const response = await API.get(`/product/filterproducts/${id}`);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// this is productCount api slice

export const productCountApiSlice = createAsyncThunk(
  "allProducr/productCountApiSlice",
  async () => {
    try {
      const response = await API.get(`/product/product-count`);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
