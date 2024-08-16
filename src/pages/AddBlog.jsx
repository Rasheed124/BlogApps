import { useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

import uploadIcon from "../assets/img/upload_area.svg";

const AddBlog = ({ addBlogSubmit }) => {
  const navigate = useNavigate();

  // const {id} = useParams()

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("post-slide");
  const [date, setDate] = useState("");

  // const imageUploadHandler = (e) => {
  //   setImage(e.target.files[0]);
  // };

  // const imageUploadHandler = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setImage(reader.result); // This is the base64 string
  //   };
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogData = {
      title,
      author,
      image,
      description,
      category,
      date,
    };

    // console.log(blogData);

    addBlogSubmit(blogData);

    toast.success("Blog Added Successfully");

    return navigate("/");
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


                {/* IGNORE */}
                
                {/* <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Upload Image</Form.Label>

                  <div className="relative">
                    <Form.Label>
                      <img
                        src={image ? URL.createObjectURL(image) : uploadIcon}
                        alt="image upload"
                        style={{maxWidth: "100px"}}
                      />
                    </Form.Label>
                    <Form.Control
                      type="file"
                      className="none"
                      required
                      onChange={imageUploadHandler}
                    />
                  </div>
                </Form.Group> */}
{/* 
                <Form.Group className="mb-3" controlId="formFile">
                  <Form.Label>Add Image</Form.Label>
                  <Form.Control type="file" onChange={imageUploadHandler} />
                </Form.Group> */}

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
