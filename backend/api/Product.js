// import express from "express";
// import Product from "../models/Product";

// const router = express.Router();

// // Fetch all products
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// });

// // Add Product API
// router.post("/add", async (req, res) => {
//   const { name, description, price, image, rating } = req.body;
//   console.log(rating);

//   try {
//     const newProduct = new Product({
//       name,
//       description,
//       price,
//       image,
//       rating: Number(rating),
//     });
//     await newProduct.save();
//     res
//       .status(201)
//       .json({ message: "Product added successfully", product: newProduct });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error adding product", error: error.message });
//   }
// });

// export default router;
