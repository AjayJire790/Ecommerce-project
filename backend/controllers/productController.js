// import Product from "../models/Product.js";

// // Add a new product
// export const addProduct = async (req, res) => {
//   const { name, description, price, image, rating } = req.body;

//   if (!name || !description || !price || !image || !rating) {
//     return res.status(400).json({ message: "Please fill all required fields" });
//   }

//   try {
//     const product = new Product({ name, description, price, image, rating });
//     await product.save();
//     res.status(201).json(product);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error adding product", error: error.message });
//   }
// };

// // Get all products (for existing functionality)
// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };
