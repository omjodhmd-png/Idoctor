import { authMiddleware } from "../middleware/auth.js";
import express from "express";


const router = express.Router();



router.get("/home",authMiddleware("user"),(req, res) => {
    res.json({ message: "Welcome user"})
})