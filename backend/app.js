import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection  from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import router from "./routes/formrouter.js";

const app=express();
dotenv.config({path : "./config/config.env"});

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        method:["POST"],
        credentials : true,
    })
);

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api/v1/form", router);

dbConnection();
app.use(errorMiddleware);

export default app;