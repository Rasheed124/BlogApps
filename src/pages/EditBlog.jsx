import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBlog = ({ updateBlogSubmit }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("post-slide");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {

    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`);
        const blog = await response.json();
        setTitle(blog.title);
        setAuthor(blog.author);
        setDescription(blog.description);
        setCategory(blog.category);
        setDate(blog.date);
      } catch (error) {
        console.error("Error fetching the blog data", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const blogData = {
      id,
      title,
      author,
      image,
      description,
      category,
      date,
    };


    updateBlogSubmit(blogData);

    toast.success("Blog Updated Successfully");

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

export default EditBlog;
