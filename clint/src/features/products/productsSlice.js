import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProductApiSlice,

  getAllProducts,
  getSingleProducts,
  productCountApiSlice,
  productFilterApiSlice,
  updateProductApiSlice,
} from "./productsApiSlice";

export const productsSlice = createSlice({
  name: "productsSlice",

  initialState: {
    Product: [],
    currentPage: 1,
    singleProduct:null,
    totalPages: 1,
    itemsPerPage: 2,
    ProductCount: null,
    message: null,
    error: null,
    lodaing: false,
  },

  reducers: {
    setEmtyMessage: (state) => {
      state.message = null;
      state.error = null;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // this get products
      .addCase(getAllProducts.pending, (state) => {
        state.lodaing = true;
      })
      // this get products
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.lodaing = false;
        state.Product = action.payload.Product;
        state.ProductCount = action.payload.totalProducts;
        state.totalPages = action.payload.totalPages;
      })
      // this get products
      .addCase(getAllProducts.rejected, (state, action) => {
        state.lodaing = false;
        state.error = action.error.message;
      })


      // this get single products
      .addCase(getSingleProducts.pending, (state) => {
        state.lodaing = true;
      })
      .addCase(getSingleProducts.fulfilled, (state, action) => {
        state.lodaing = false;
        //console.log(action.payload);
        state.singleProduct = action.payload.singleProduct;
      })
      .addCase(getSingleProducts.rejected, (state, action) => {
        state.lodaing = false;
        state.error = action.error.message;
      })
      // this create  products
      .addCase(createProduct.pending, (state) => {
        state.lodaing = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.lodaing = false;

        state.Product = action.payload;
        state.message = action.payload.message;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.lodaing = false;
        state.error = action.error.message;
      })
      // this is delete  products
      .addCase(deleteProductApiSlice.pending, (state) => {
        state.lodaing = true;
      })
      .addCase(deleteProductApiSlice.fulfilled, (state, action) => {
        state.lodaing = false;
        state.Product = state.Product.filter(
          (item) => item.id !== action.payload.id
        );
        state.message = action.payload.message;
      })
      .addCase(deleteProductApiSlice.rejected, (state, action) => {
        state.lodaing = false;
        state.error = action.error.message;
      })
      // this update  products
      .addCase(updateProductApiSlice.pending, (state) => {
        state.lodaing = true;
      })
      .addCase(updateProductApiSlice.fulfilled, (state, action) => {
        state.lodaing = false;
        console.log(action.payload);
        state.Product = state.Product?.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload.data.updateProduct;
          } else {
            return item;
          }
        });
        state.message = action.payload.message;
      })
      .addCase(updateProductApiSlice.rejected, (state, action) => {
        state.lodaing = false;
        state.error = action.error.message;
      })
      // this is   filters products
      .addCase(productFilterApiSlice.pending, (state) => {
        state.lodaing = true;
      })
      .addCase(productFilterApiSlice.fulfilled, (state, action) => {
        state.lodaing = false;

        state.Product = action.payload.products;
        state.message = action.payload.message;
      })
      .addCase(productFilterApiSlice.rejected, (state, action) => {
        state.lodaing = false;
        state.error = action.error.message;
      })
      // this is    products count
      .addCase(productCountApiSlice.pending, (state) => {
        state.lodaing = true;
      })
      .addCase(productCountApiSlice.fulfilled, (state, action) => {
        state.lodaing = false;

        state.count = action.payload.totalProducts;
        state.message = action.payload.message;
      })
      .addCase(productCountApiSlice.rejected, (state, action) => {
        state.lodaing = false;
        state.error = action.error.message;
      });
  },
});

// export product selector

export const productSelector = (state) => state.Products;
// export actions
export const { setEmtyMessage } = productsSlice.actions;
export const { setCurrentPage } = productsSlice.actions;
//export reducers

export default productsSlice.reducer;
