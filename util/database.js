import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://ljunseok93_db_user:nice1234@leejunseok.uyrcjl3.mongodb.net/?appName=leejunseok";
const options = {};
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
