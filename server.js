import express, { urlencoded } from "express";
import colors from "colors";
import dotenv from "dotenv";
import authRouter from "./router/authRouter/authRouter.js";
import productRouter from "./router/productRouter/productRouter.js";
import categoryRouter from "./router/categoryRouter/categoryRouter.js";
import errorHandller from "./errorHandller/errorHandller.js"
import cors from "cors"


// envairolment varibale 

dotenv.config();
const PORT = process.env.PORT || 6060;

// init express

const app = express();
// express middlewars
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(cors({
//     origin: "http://localhost:3001",
//     Credential: true
// }))

app.use(cors({
    origin:"http://localhost:3001",
    credentials: true,
}))


// use authRouter
app.use("/api/v1/auth", authRouter);
// use productRouter 
app.use("/api/v1/product", productRouter)

// use cateory Router

app.use("/api/v1/category", categoryRouter)


// error handller
app.use(errorHandller)
// server listen
app.listen(PORT, () =>{
console.log(`server is runing on ${PORT}`.bgGreen.black);
})