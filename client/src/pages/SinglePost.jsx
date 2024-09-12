import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const SinglePost = () => {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [singleBlog, setSingleBlog] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/post/${id}`);
        const blog = await response.json();
        // console.log(blog);
        setSingleBlog(blog);
      } catch (error) {
        console.error("Error fetching the blog data", error);
      }
    };

    fetchBlog();
  }, [id]);

  const onDeleteClick = async (blogId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:4000/api/post/${blogId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Blog deleted successfully");
        navigate("/"); // Redirect to homepage after deletion
      } else {
        toast.error("Failed to delete the blog");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the blog");
      console.error("Error deleting the blog:", error);
    }
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
                  <h1 className="mb-2">{singleBlog.title}</h1>

                  <figure className="my-4">
                    <img
                      src={`http://localhost:4000/${singleBlog.cover}`}
                      className="img-cover"
                      alt={`${singleBlog.title}`}
                    />
                    <figcaption>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, odit?{" "}
                    </figcaption>
                  </figure>
                  <div className="post-meta">
                    <span className="date">{singleBlog.category}</span>{" "}
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>{singleBlog.date}</span>
                  </div>
                  {/* <p>{singleBlog.content}</p> */}

                  <div
                    dangerouslySetInnerHTML={{ __html: singleBlog.content }}
                  />
                </div>
                {/* <!-- End Single Post Content --> */}

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {userInfo.id === singleBlog.author?._id && (
                    <>
                      <Button
                        onClick={() => onDeleteClick(singleBlog._id)}
                        variant="primary"
                        type="button"
                      >
                        Delete
                      </Button>
                      <Link to={`/edit-blog/${singleBlog._id}`}>
                        <Button variant="primary">Edit Blog</Button>
                      </Link>
                    </>
                  )}
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
