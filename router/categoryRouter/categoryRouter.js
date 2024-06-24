import express from "express";
import {  createcreateCategory, deleteMultiplecreateCategory, deletecreateCategory, getSingleCategory, getcreateCategory, updatecreateCategory } from "../../controller/categoryController/categoryController.js";
import { UserMulter } from "../../utiles/Multer.js";

// init express router

const categoryRouter = express.Router();

// create route
categoryRouter.get("/", getcreateCategory);
categoryRouter.get("/single_category/:id", getSingleCategory);
categoryRouter.post("/", createcreateCategory);
categoryRouter.delete("/delete_many/:id", deleteMultiplecreateCategory);
categoryRouter.delete("/:id", deletecreateCategory);
categoryRouter.patch("/:id", updatecreateCategory);
//categoryRouter.post("/categorya_and_product", ProductAndCategory);



// export categoryRouter

export default categoryRouter;