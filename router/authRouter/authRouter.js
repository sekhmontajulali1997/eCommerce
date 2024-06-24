import express from "express";
import { createUsers, deleteMultipleUsers, deleteUsers, getUsers, updateUsers } from "../../controller/authController/authController.js";

// init express router

const authRouter = express.Router();

// create route
authRouter.get("/users", getUsers);
authRouter.post("/users", createUsers);
authRouter.delete("/users/:id", deleteMultipleUsers);
authRouter.delete("/users/:id", deleteUsers);
authRouter.patch("/users/:id", updateUsers);



// export authRouter

export default authRouter;
