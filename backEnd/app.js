
import express from  "express";
import userRoutes from "./routes/authRoutes.js";
import morgan from "morgan";


const app= express();

app.use(morgan("dev"))
app.use(express.json());

app.use("/api", userRoutes);




export default app;