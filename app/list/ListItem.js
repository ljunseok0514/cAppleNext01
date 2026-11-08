"use client";

import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
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
            <span
              onClick={() => {
                fetch("api/test", {
                  method: "POST",
                  body: JSON.stringify([1, 2, 3]),
                }).then(() => {});
              }}
            >
              삭제
            </span>
          </div>
        );
      })}
    </div>
  );
}
