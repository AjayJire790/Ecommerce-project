// import jwt from "jsonwebtoken";

// export const authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
//   if (!token)
//     return res.status(401).json({ error: "Access denied. No token provided." });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user data to request
//     next();
//   } catch (err) {
//     res.status(403).json({ error: "Invalid or expired token." });
//   }
// };
