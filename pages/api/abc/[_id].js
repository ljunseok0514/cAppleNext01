import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  let db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .deleteOne({ _id: new ObjectId(요청.query._id) });
  console.log(요청.query);
  return 응답.status(200).json();
}
