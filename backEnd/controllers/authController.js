import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // 1️⃣ Validation
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2️⃣ Validate role
    const allowedRoles = ["user", "doctor"];
    const userRole = allowedRoles.includes(role) ? role : "user";

    // 3️⃣ Check email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // 4️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5️⃣ Create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role: userRole,
    });

    // 6️⃣ Response
    res.status(201).json({
      message: "User registered successfully",
      role: user.role,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const login =async(req,res)=>{
  try {
    const { email, password }=req.body;
    const user = await User.findOne({ where:{ email } });

    if(!user){
      return res.status(404).json({ message: "User not found" })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(401).json({ message: "Invalid credentails"})
    }
    
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET || "secret123",
      {expiresIn:"7d"}
    );

    res.json({
      message:"Login success",
      token,
      user:{
        id:user.id,
      fullName: user.fullName,
    role: user.role, }
    })

  } catch (error) {
     res.status(500).json({ message: "Server error"})
  }
}
