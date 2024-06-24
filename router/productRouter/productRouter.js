import express from "express";

import { getProduct,createProduct, deleteMultipleProduct, deleteProduct, updateProduct, getSingleProduct } from "../../controller/productController/productController.js";
import { UserMulter } from "../../utiles/Multer.js";

// init express router

const productRouter = express.Router();

// create route
productRouter.get("/", getProduct);
productRouter.post("/",UserMulter, createProduct);
productRouter.get("/getsingleproduct/:id", getSingleProduct);
productRouter.delete("/:id", deleteMultipleProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.patch("/:id", updateProduct);



// export productRouter

export default productRouter;
