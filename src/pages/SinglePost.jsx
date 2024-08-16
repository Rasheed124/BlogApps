import React, { useEffect, useState } from "react";
import landscapeImage from "../assets/img/post-landscape-5.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const SinglePost = ({ deleteBlog }) => {

  const [singleBlog, setSingleBlog] = useState([])
  const navigate = useNavigate();

  const { id } = useParams();


  useEffect(() => {
    
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        const blog = await response.json();
        // console.log(blog);
        setSingleBlog(blog)
        
      } catch (error) {
        console.error("Error fetching the blog data", error);
      }
    };

    fetchBlog();
  }, [id]);


  const onDeleteClick = async (blogId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirm) return;

    await deleteBlog(blogId);

    toast.success("Blog deleted successfully");

    navigate("/");
  };


  


  return (
    <>
      <main id="main">
        <section className="single-post-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 post-content">
                {/* <!-- ======= Single Post Content ======= --> */}
                <div className="single-post">
                  <div className="post-meta">
                    <span className="date">{singleBlog.category}</span>{" "}
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>{singleBlog.date}2</span>
                  </div>
                  <h1 className="mb-5">
                  {singleBlog.title}
                  </h1>
                  <p>
                      {singleBlog.description}
                  </p>

               
                
                </div>
                {/* <!-- End Single Post Content --> */}

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button  onClick={() => onDeleteClick(id)}variant="primary" type="submit">
                    Delete
                  </Button>
                  <Link to={`/edit-blog/${id}`}>
                    <Button variant="primary">Edit Blog</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SinglePost;
