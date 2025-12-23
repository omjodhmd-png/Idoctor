import express from "express";
import { createDoctor, getAllDoctors } from "../controllers/doctorController.js";
import { authMiddleware } from "../middleware/auth.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";


const router = express.Router();




router.get("/doctors",getAllDoctors)
router.post("/doctors",authMiddleware,roleMiddleware("doctor"), createDoctor);

// router.post("/doctor/profile",authMiddleware,roleMiddleware("doctor"),createDoctorProfile)
export default router;