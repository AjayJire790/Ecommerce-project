import { MongoClient } from "mongodb";

let client;
export const connectToMongoDB = async () => {
  try {
    await MongoClient.connect(process.env.MONGO_URI)
      .then((clientInstance) => {
        client = clientInstance;
        console.log("Mongodb is connected");
      })
      .catch((err) => {
        console.error(`Failed to connect to MongoDB: ${err.message}`);
        process.exit(1);
      });
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export const getDB = () => {
  return client.db();
};
