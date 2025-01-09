// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import productRoutes from "./routes/productRoutes.js";
// import { authenticate } from "./middleware/authMiddleware.js";

//1.Import Expresss
import "./env.js";
import express from "express";
// import swagger from "swagger-ui-express";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./src/features/product/product.route.js";
// import bodyParser from "body-parser";
import userRouter from "./src/features/user/user.route.js";
import cartRouter from "./src/features/cartItems/cartItems.route.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";
// import apiDocs from "./swagger.json" assert { type: "json" };
import { connectToMongoDB } from "./src/config/mongodb.js";

//2.Create Server

// dotenv.config();

const server = express();

// server.use(cors());
// server.use(express.json());
// server.use("/api/products", productRoutes);

//CORS policy configuration
var corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend URL
  methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
  credentials: true, // Enable cookies or authentication headers if needed
};

server.use(cors(corsOptions));
//   if (req.method == "OPTIONS") { //   res.header("Access-Control-Allow-Methods", "*"); //   res.header("Access-Control-Allow-Headers", "*"); //   res.header("Access-Control-Allow-Origin", "http://localhost:5500"); // server.use((req, res, next) => {
//     return res.sendStatus(200);
//   }
//   next();
// });
server.use(express.json());

// server.use(bodyParser.json());

// server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

//for all requests related to product, redirect to product  routes.
server.use("/app/products", productRouter);

//for all requests related to cartItems
server.use("/app/carts", jwtAuth, cartRouter);

//for all requests related to user routes.
server.use("/app/users", userRouter);

//3.Default request handler
// server.get("/", (req, res) => {
//   res.send("Welcome to Ecommerce APIs");
// });

//4.Middlware to handle 404 request
server.use((req, res) => {
  res
    .status(404)
    .send(
      "API not found. Please check our documentation for more information at localhost:3000/api-docs"
    );
});

//5.Server Specify
server.listen(5000, () => {
  console.log("Server is listenning on port 5000");
  connectToMongoDB();
});
