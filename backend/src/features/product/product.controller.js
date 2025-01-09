import ProductModel from "./product.model.js";
import ProductRepository from "./product.repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  async getAllProducts(req, res) {
    try {
      const products = await this.productRepository.getAll();
      res.status(200).send(products);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong in getAllProducts");
    }
  }

  async addProduct(req, res) {
    try {
      const { name, desc, price, imageUrl, category } = req.body;
      // if (!req.file) {
      //   return res.status(400).send("File upload is required.");
      // }

      const newProduct = new ProductModel(
        name,
        desc,
        parseFloat(price),
        imageUrl,
        category,
        // sizes.split(",")
        null
      );
      const createdProduct = await this.productRepository.add(newProduct);
      res.status(201).send(createdProduct);
    } catch (err) {
      console.log(err);
      return res.status(400).send("Something went wrong. addProduct");
    }
  }

  async rateProduct(req, res, next) {
    try {
      const userID = req.userID;
      const productID = req.body.productID;
      const rating = req.body.rating;
      const error = await this.productRepository.rate(
        userID,
        productID,
        rating
      );
      return res.status(200).send("Rating has been added");
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong.getOneProduct");
      next(err);
    }
  }

  async getOneProduct(req, res) {
    try {
      const id = req.params.id;
      const product = await this.productRepository.get(id);
      if (!product) {
        res.status(404).send("Product not found");
      } else {
        return res.status(200).send(product);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong.getOneProduct");
    }
  }

  async filterProducts(req, res) {
    try {
      const minPrice = req.query.minPrice;
      const maxPrice = req.query.maxPrice;
      const category = req.query.category;
      const result = await this.productRepository.filter(
        minPrice,
        maxPrice,
        category
      );
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong.getOneProduct");
    }
  }
}
