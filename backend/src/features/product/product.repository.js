import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

export default class ProductRepository {
  constructor() {
    this.collection = "products";
  }
  async add(newProduct) {
    try {
      //1.Get the database
      const db = getDB();
      //2. Create a collection
      const collection = db.collection(this.collection);
      //3.Insert the document
      await collection.insertOne(newProduct);

      return newProduct;
    } catch (err) {
      console.error(err);
      throw new ApplicationError(
        "Something went wrong in the database, Please try later.",
        500
      );
    }
  }
  async getAll() {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      return await collection.find().toArray();
    } catch {
      console.error(err);
      throw new ApplicationError(
        "Something went wrong in the database, Please try later.",
        500
      );
    }
  }
  async get(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      return await collection.findOne({ _id: new ObjectId(id) });
    } catch {
      console.error(err);
      throw new ApplicationError(
        "Something went wrong in the database, Please try later.",
        500
      );
    }
  }
  async filter(minPrice, maxPrice, category) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      let filterExpression = {};
      if (minPrice) {
        filterExpression.price = { $gte: parseFloat(minPrice) };
      }
      if (maxPrice) {
        filterExpression.price = {
          ...filterExpression.price,
          $lte: parseFloat(maxPrice),
        };
      }
      if (category) {
        filterExpression.category = category;
      }
      return await collection.find(filterExpression).toArray();
    } catch {
      console.error(err);
      throw new ApplicationError(
        "Something went wrong in the database, Please try later.",
        500
      );
    }
  }
  async rate(userID, productID, rating) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      //1.Removes existing rating
      await collection.updateOne(
        {
          _id: new ObjectId(productID),
        },
        { $pull: { ratings: { userID: new ObjectId(userID) } } }
      );
      await collection.updateOne(
        { _id: new ObjectId(productID) },
        { $push: { ratings: { userID: new ObjectId(userID), rating } } }
      );
    } catch (err) {
      console.error(err);
      throw new ApplicationError(
        "Something went wrong in the database, Please try later.",
        500
      );
    }
  }
}
