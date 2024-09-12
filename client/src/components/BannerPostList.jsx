import React from "react";
import { Link } from "react-router-dom";

const BannerPostList = ({
  title,
  author,
  content,
  category,
  cover,
}) => {
  // const imageUrl = `/src/assets/img/${blog.image}-${blog.id}.jpg`;

  // const MAX_LENGTH = 100;

  // const shortDescription =
  // blog.description.length > MAX_LENGTH
  //   ? `${blog.description.substring(0, MAX_LENGTH)}...`
  //   : blog.description;

  return (
    <>
      <div className="img-bg-inner">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{author?.username}</p>
        {/* <p>{format(new Date(createdAt), 'MMM d')}</p> */}
      </div>
    </>
  );
};

export default BannerPostList;
