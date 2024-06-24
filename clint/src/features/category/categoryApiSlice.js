// create category api slice

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../utils/axiosApi/api";



// this for category create api slice

export const createCategory = createAsyncThunk(
  "allProductCategory/createCategory",
  async (data) => {
    try {
      const response = await API.post("/category", data);

      return response.data
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// this is get all category

export const getCategoryApiSlice = createAsyncThunk("cagegoryApiSlice/getCategoryApiSlice", async() =>{
    try {

        const response = await API.get("/category")
        return response.data.createCategory
        
    } catch (error) {
        throw new Error(error.response.data.message)
        
    }
})

// this for get single category  api slice

export const getSingleCategory = createAsyncThunk(
    "allProductCategory/getSingleCategory",
    async (params) => {
      try {
        const response = await API.get(`/category/single_category/${params.id}`);
        return response.data.getSingleCategory
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  );
  // this for get updateCategory category  api slice
  
  export const updateCategory = createAsyncThunk(
    "allProductCategory/updateCategory",
    async (data) => {
      try {
        const response = await API.patch(`/category/${data.id}`, data);
  
        
        return {data: response.data, id: data.id}
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  );

  // for delete category

  export const deleteCategory = createAsyncThunk("allProductCategory/deleteCategory", async(id)=>{


    try{
      const response = await API.delete(`/category/${id}`);


      return response.data

    }catch(error){
      throw new Error(error.response.data.message)

    }

  })