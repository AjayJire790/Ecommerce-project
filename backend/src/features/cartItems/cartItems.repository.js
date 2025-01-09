import { getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

export default class CartItemsRepository {
  constructor() {
    this.collection = "cartItems";
  }
  async add(productID, userID, quantity) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      await collection.insertOne({
        productID: new ObjectId(productID),
        userID: new ObjectId(userID),
        quantity,
      });
    } catch (err) {
      console.error(err);
      throw new ApplicationError(
        "Something went wrong in the database, Please try later.",
        500
      );
    }
  }
  async get(userID) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const result = await collection
        .find({ userID: new ObjectId(userID) })
        .toArray();
      return result;
    } catch (err) {
      console.error(err);
      throw new ApplicationError(
        "Something went wrong in the database, Please try later.",
        500
      );
    }
  }
  async delete(userID, cartItemID) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const result = await collection.deleteOne({
        _id: new ObjectId(cartItemID),
        userID: new ObjectId(userID),
      });

      return result.deletedCount > 0;
    } catch (err) {
      console.error(err);
      throw new ApplicationError(
        "Something went wrong in the database, Please try later.",
        500
      );
    }
  }
}
