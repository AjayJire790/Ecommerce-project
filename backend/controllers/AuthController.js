// // import express from "express";
// // import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import User from "../../models/User.js";

// // Signup Route
// export const signUp = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const user = new User({ username, email, password });
//     await user.save();
//     res.status(201).json({ message: "User created successfully!" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Login Route
// export const signIn = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ error: "User not found!" });

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid)
//       return res.status(401).json({ error: "Invalid password!" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.status(200).json({ token, username: user.username });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
