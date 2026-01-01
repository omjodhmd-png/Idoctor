import express from "express";
import {
  createBooking,
  getMyBookings,
  getDoctorBookings,
  getBookingById,
  cancelBooking,
  updateBookingStatus,
} from "../controllers/bookingController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Create booking (user)
router.post("/", authMiddleware, createBooking);

// Get logged user's bookings
router.get("/my", authMiddleware, getMyBookings);

// Get doctor bookings
router.get("/doctor", authMiddleware, getDoctorBookings);

// Get single booking
router.get("/:id", authMiddleware, getBookingById);

// Cancel booking (user)
router.patch("/:id/cancel", authMiddleware, cancelBooking);

// Update status (doctor)
router.patch("/:id/status", authMiddleware, updateBookingStatus);

export default router;
