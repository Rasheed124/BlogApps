import { useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate, useParams } from "react-router-dom";

import Editor from "../components/Editor";

const AddBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("image", image[0]);
    data.set("content", content);
    data.set("category", category);


    const response = await fetch("http://localhost:4000/api/post", {
      method: "POST",
      body: data,
      credentials: 'include'
    });

    if (response.ok) {
      toast.success("Blog Added Successfully");
      navigate("/");
    } else {
      toast.error("Error adding blog. Please try again.");
    }
  };


  return (
    <>
      <main id="main">
        <section className="" style={{ marginTop: "80px" }}>
          <div className="container-md">
            <div className="row">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Add Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
              

                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label>Upload image</Form.Label>
                  <Form.Control
                    type="file"
                    size="sm"
                    onChange={(e) => setImage(e.target.files)}
                  />
                </Form.Group>
             
                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Add Content</Form.Label>

                  <Editor value={content} onChange={setContent} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCategory">
                  <Form.Label>Add Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Category"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Form.Group>

              
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddBlog;
