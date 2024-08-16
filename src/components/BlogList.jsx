import React from "react";
import { Link } from "react-router-dom";


const BlogList = ({ blog }) => {
  const imageUrl = `/src/assets/img/${blog.image}-${blog.id}.jpg`;

  const MAX_LENGTH = 100; 

  const shortDescription =
  blog.description.length > MAX_LENGTH
    ? `${blog.description.substring(0, MAX_LENGTH)}...`
    : blog.description;
  
  return (
    <>
      <div key={blog.id} className="swiper-slide">
        <Link
          to={`single-post/${blog.id}`}
          className="img-bg d-flex align-items-end"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="img-bg-inner">
            <h2>{blog.title}</h2>
            <p>{shortDescription}</p>
          </div>
        </Link>
      </div>
      ;
    </>
  );
};

export default BlogList;
