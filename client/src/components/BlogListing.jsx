import React from "react";
import { Link } from "react-router-dom";

const BlogListing = ({ blog }) => {
  const imageUrl = `/src/assets/img/${blog.image}-${blog.id}.jpg`;

  const MAX_LENGTH = 200; 

  const shortDescription =
  blog.description.length > MAX_LENGTH
    ? `${blog.description.substring(0, MAX_LENGTH)}...`
    : blog.description;
  
  return (
    <>
      <div className="post-entry-1">
        <Link to={`/single-post/${blog.id}`}>
          <img src={imageUrl} className="img-fluid" alt={`${blog.title}`} />
        </Link>
        <div className="post-meta">
          <span className="date">{blog.catgory}</span>{" "}
          <span className="mx-1">&bullet;</span> <span>{blog.date}</span>
        </div>
        <h2>
          <Link to={`/single-post/${blog.id}`}>{blog.title}</Link>
        </h2>
        <p>{shortDescription}</p>
      </div>
    </>
  );
};

export default BlogListing;
