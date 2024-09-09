import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        alert("Login successful");
        navigate('/')
      } else {
        alert("Wrong credentials");
        throw new Error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main id="main">
      <section className="" style={{ marginTop: "80px" }}>
        <div className="container-md" style={{ maxWidth: "800px" }}>
          <div className="row">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
