import { createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  deleteCategory,
  getCategoryApiSlice,
  getSingleCategory,
  updateCategory,
} from "./categoryApiSlice";

// create category Slice
const cagegorySlice = createSlice({
  name: "allCagegory",

  initialState: {
    category: [],
    error: null,
    message: null,
    loading: false,
  },
  reducers: {
    setCategoryEmtyMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // this is createCategoryApiSlice
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload.Product;
        state.message = action.payload.message;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // this is getCategoryApiSlice
      .addCase(getCategoryApiSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryApiSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
       // state.message = action.payload.message;
      })
      .addCase(getCategoryApiSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // this is get single Category

      .addCase(getSingleCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(getSingleCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // this is for delete category
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
       
        state.category = state.category.filter(
          (item) => item.id !== action.payload.deletecreateCategory.id
        );
        state.message = action.payload.message;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // this is get update Category

      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = state.category?.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload.data.updatecreateCategory;
          } else {
            return item;
          }
        });
        state.message = action.payload.message;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//export selectors

export const categorySelector = (state) => state.Category;

// export actions
export const { setCategoryEmtyMessage } = cagegorySlice.actions;
// expoer categotyReducer

export default cagegorySlice.reducer;
