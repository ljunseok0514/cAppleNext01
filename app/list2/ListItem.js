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
            <button
              className="list-btn"
              onClick={(e) => {
                // fetch("/api/post/delete", {
                //   method: "DELETE",
                //   body: result[i]._id,
                // }).then(() => {
                //   e.target.parentElement.style.opacity = 0;
                //   setTimeout(() => {
                //     e.target.parentElement.style.display = "none";
                //   }, 1000);
                // });
                fetch(`/api/abc/${result[i]._id}`);
              }}
            >
              🗑️
            </button>
          </div>
        );
      })}
    </div>
  );
}
