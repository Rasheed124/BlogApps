import React from "react";
import { Link } from "react-router-dom";

const BannerPostList = ({ _id,  title, author, content, category, cover }) => {
  const sanitizePath = (path) => {
    if (path && typeof path === "string") {
      return path.replace(/[^a-zA-Z0-9/.\-_]/g, "/");
    }
    return path;
  };

  const sourceBg = `http://localhost:4000/${sanitizePath(cover)}`;
  return (
    <>
      <Link
        to={`/single-post/${_id}`}
        className="img-bg d-flex align-items-end"
        style={{
          backgroundImage: `url(${sourceBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="img-bg-inner">
          <h2>{title}</h2>
          <p>{author?.username}</p>
        </div>
      </Link>
    </>
  );
};

export default BannerPostList;
