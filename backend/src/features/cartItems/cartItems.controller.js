// import CartItemsModel from "./cartItems.model.js";
import CartItemsRepository from "./cartItems.repository.js";

export default class CartItemsController {
  constructor() {
    this.cartItemsRepository = new CartItemsRepository();
  }
  async addCartItem(req, res) {
    try {
      const { productID, quantity } = req.body;
      const userID = req.userID;
      await this.cartItemsRepository.add(productID, userID, quantity);
      res.status(201).send("Successfully added.");
    } catch (err) {
      console.log(err);
      return res.status(400).send("Something went wrong. addItem");
    }
  }
  async getCartItem(req, res) {
    try {
      const userID = req.userID;
      const cartItems = await this.cartItemsRepository.get(userID);
      return res.status(200).send(cartItems);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong. getCartItems");
    }
  }
  async deleteCartItem(req, res) {
    try {
      const userID = req.userID;
      const cartItemID = req.params.id;
      const isDeleted = await this.cartItemsRepository.delete(
        userID,
        cartItemID
      );
      if (!isDeleted) {
        return res
          .status(404)
          .send("Item not found or does not belong to the user.");
      }
      return res.status(200).send("Cart Item is removed.");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong. deleteCartItem");
    }
  }
}
