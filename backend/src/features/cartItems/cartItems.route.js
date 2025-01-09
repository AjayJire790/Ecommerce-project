import express from "express";
import CartItemsController from "./cartItems.controller.js";

const cartRouter = express.Router();

const cartController = new CartItemsController();

cartRouter.post("/", (req, res, next) => {
  cartController.addCartItem(req, res, next);
});
cartRouter.get("/", (req, res, next) => {
  cartController.getCartItem(req, res, next);
});
cartRouter.delete("/:id", (req, res, next) => {
  cartController.deleteCartItem(req, res, next);
});

export default cartRouter;
