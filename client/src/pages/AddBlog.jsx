import { useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate, useParams } from "react-router-dom";

import uploadIcon from "../assets/img/upload_area.svg";

const AddBlog = () => {
  const navigate = useNavigate();

  // const {id} = useParams()

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("post-slide");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    const data = new FormData();
    data.set("title", title);
    data.set("author", author);
    data.set("image", image[0]);
    data.set("content", content);
    data.set("category", category);
    data.set("date", date);

    fetch("http://localhost:4000/api/post", {
      method: "POST",
      body: data,
    });

    // const blogData = {
    //   title,
    //   author,
    //   image,
    //   content,
    //   category,
    //   date,
    // };

    addBlogSubmit(blogData);

    toast.success("Blog Added Successfully");

    return navigate("/");
  };

  let quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  let quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

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
                <Form.Group className="mb-3" controlId="formBasicAuthor">
                  <Form.Label>Add Author</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author"
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}
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
                {/* 
                <Form.Group className="mb-3" controlId="formBasicDescription">
                  <Form.Label>Add Description</Form.Label>
                  <Form.Control
                    placeholder="Enter Description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    as="textarea"
                    rows={5}
                  />
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Add Content</Form.Label>

                  <ReactQuill
                    value={content}
                    onChange={(newValue) => setContent(newValue)}
                    modules={quillModules}
                    formats={quillFormats}
                  />
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

                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Add Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <Form.Text id="dateHelpBlock" muted>
                    Your date should be in this format - 2024-08-04
                  </Form.Text>
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
