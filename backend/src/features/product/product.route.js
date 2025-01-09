//1.Import Express
import express from "express";
import ProductController from "./product.controller.js";
// import { upload } from "../../middleware/fileupload.middleware.js";
import jwtAuth from "../../middleware/jwt.middleware.js";

//2.Initilize Express router
const productRouter = express.Router();

const productController = new ProductController();

//localhost:3000:/api/products/filter?minPrice=10&maxPrice=20&category=Category1
productRouter.post("/rate", jwtAuth, (req, res, next) => {
  productController.rateProduct(req, res, next);
});

productRouter.get("/filter", (req, res) => {
  productController.filterProducts(req, res);
});

productRouter.get("/", (req, res) => {
  productController.getAllProducts(req, res);
});

// productRouter.post("/", upload.single("imageUrl"), (req, res) => {
//   productController.addProduct(req, res);
// });
productRouter.post("/", (req, res) => {
  productController.addProduct(req, res);
});

productRouter.get("/:id", (req, res) => {
  productController.getOneProduct(req, res);
});
//All the paths to controller methods
export default productRouter;
