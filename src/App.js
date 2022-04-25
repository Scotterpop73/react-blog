import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import BlogComponent from "./components/BlogComponent";
import CreateComponent from "./components/CreateComponent";
import DashboardComponent from "./components/DashboardComponent";
import LoginComponent from "./components/LoginComponent";

function App() {
  const [components, setComponents] = useState([
    { Title: "", Component: CreateComponent, Path: "Create" },
    { Title: "", Component: LoginComponent, Path: "Login" },
    { Title: "Dashboard", Component: DashboardComponent, Path: "Dashboard" },
    { Title: "Blog", Component: BlogComponent, Path: "/" }
  ]);

  return (
    <BrowserRouter>
      <div className="App-header">
        <Container fluid className="p-0">
          <Row className="p-0">
            <Col className="p-0">
              <Navbar bg="light" expand="lg">
                <Container fluid>
                  <Navbar.Brand href="/"></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                  >
                    <Nav>
                      {components.map((component, idx) => {
                        let { Title, Path } = component;

                        return (
                          <Nav.Item key={idx}>
                            <Nav.Link as={Link} to={Path}>{Title}</Nav.Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
          <Routes>
            {components.map((Link, idx) => {
              let { Component, Path } = Link;
              return <Route path={Path} element={<Component />} key={idx} />;
            })}
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
