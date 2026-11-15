import Link from "next/link";
import { connectDB } from "/util/database.js";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

export const dynamic = "force-dynamic";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  result = result.map((item) => {
    item._id = item._id.toString();
    return item;
  });

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
