import express from "express";

import { getProduct,createProduct, deleteMultipleProduct, productsFilters, deleteProduct, updateProduct, getSingleProduct, productsPagination, productsCount } from "../../controller/productController/productController.js";
import { UserMulter } from "../../utiles/Multer.js";

// init express router

const productRouter = express.Router();

// create route
productRouter.get("/", getProduct);
productRouter.get("/filterproducts/:ids", productsFilters);
productRouter.post("/", createProduct);
productRouter.get("/getsingleproduct/:id", getSingleProduct);
productRouter.delete("/:id", deleteMultipleProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.patch("/:id", updateProduct);
productRouter.get("/product-perpage/:page", productsPagination);
productRouter.get("/product-count", productsCount);



// export productRouter

export default productRouter;
