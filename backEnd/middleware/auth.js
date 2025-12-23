import jwt from "jsonwebtoken";
  


export const  authMiddleware = (req, res, next)=>{
    const authHeader = req.headers.authorisation;

    if(!authHeader || !authHeader.startWith("Bearer ")){
        return res.status(401).json({ message: "No token provided" })
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded= jwt.verify(
            token,
            process.env.JWT_SECRE || "secret123"
        );

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(402).json({ message: "Invalid token"})
    }
}