import React, { useState } from "react";
import { Row, Col, Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login, GetLoggedInUserData } from "../Services/DataService";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let userData = {
      Username: username,
      Password: password,
    };
    let token = await login(userData);
    if (token.token != null) {
      localStorage.setItem("Token", token.token);
      GetLoggedInUserData(username);
      navigate("/Dashboard");
    }
  };

  return (
    <div className="bgImageLogin">
      <Row>
        <Col>
          <Card
            style={{ width: "80rem", borderRadius: 10 }}
            className="cardOpacity"
          >
            <Card.Body>
              <Card.Title>Login</Card.Title>

              <Form>
                <Form.Group className="mb-3" controlId="Username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    onChange={({ target }) => setUsername(target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="RememberMe">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                  Login
                </Button>
                <h3 className="mt-3">Dont Have an Account?</h3>
                <Button onClick={() => navigate("/Create")}>
                  Create Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
