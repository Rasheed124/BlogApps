import React from "react";
import { Link } from "react-router-dom";

import { formatISO9075 } from "date-fns";

const BlogListing = ({
  _id,
  title,
  author,
  content,
  category,
  cover,
  createdAt,
}) => {
  return (
    <>
      <div className="col-lg-4 border-start custom-border">
        <div className="post-entry-1">
          <Link to={`/single-post/${_id}`}>
            <img
              src={`http://localhost:4000/${cover}`}
              className="img-fluid"
              alt={`${title}`}
            />
          </Link>
          <div className="post-meta">
            <span className="date">{category}</span>{" "}
            <span className="mx-1">&bullet;</span>{" "}
            <span>{formatISO9075(new Date(createdAt))}</span>
            <span className="author mb-3 d-block">{author?.username}</span>
          </div>
          <h2>
            <Link to={`/single-post/${_id}`}>{title}</Link>
          </h2>

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  );
};

export default BlogListing;
