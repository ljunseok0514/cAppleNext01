import Link from "next/link";
import { connectDB } from "/util/database.js";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>
              <p>{result[i].content}</p>
            </Link>
            <Link href={`/edit/${result[i]._id}`} className="edit">
              수정
            </Link>
            <DetailLink />
          </div>
        );
      })}
    </div>
  );
}
