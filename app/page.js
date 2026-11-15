import { connectDB } from "/util/database.js";

export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  //   await fetch("/url", { cache: "force-cache" });

  return <div>안녕</div>;
}
