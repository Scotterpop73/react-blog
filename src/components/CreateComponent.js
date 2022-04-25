import React, {useState} from "react";
import { Row, Col, Form, Button, Card, Container } from "react-bootstrap";
import { createAccount } from "../Services/DataService";

export default function CreateComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    let userData = {
      Id:0,
      Username:username,
      Password:password
    }
    createAccount(userData);
  }

  return (
    <div className="bgImageCreate">
        
      <Row>
        <Col>
          <Card style={{ width: "80rem", borderRadius:10 }} className="cardOpacity">
            <Card.Body>
              <Card.Title>Create Account</Card.Title>

              <Form>
                <Form.Group className="mb-3" controlId="Username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" onChange={({target}) => setUsername(target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={({target}) => setPassword(target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="RememberMe">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
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

