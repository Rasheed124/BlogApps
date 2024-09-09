import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 



  const handleSubmit = async (e) => {
    e.preventDefault();

       // await fetch("http://localhost:4000/api/register", {
    //   method: "POST",
    //   body: JSON.stringify({ username, email, password }),
    //   headers: { "Content-Type": "application/json" },
    // });

    // console.log({ username, email, password });
  
    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        // credentials: 'include'
      });

      
  
      if (response.ok) {
        alert("Registration successful");
        navigate("/login"); 
     
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An unexpected error occurred. Please try again.");
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

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
