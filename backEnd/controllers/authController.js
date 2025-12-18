import User from "../models/user.js";
import bcrypt from "bcrypt";

// Register Controller
export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // 1️⃣ Validation
    if (!fullName || !email || !password ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    

    // 2️⃣ Check if email exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role: "user", // default
    });

    // 5️⃣ Response (without password)
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
