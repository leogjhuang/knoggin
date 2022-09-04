import * as React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap";
import { useNavigate } from "react-router";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.js";

const AppNavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
          }}
        >
          Knoggin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/menu-uso")}>Uso</Nav.Link>
            <Nav.Link onClick={() => navigate("/menu-sudo")}>Sudotype</Nav.Link>
            <Nav.Link onClick={() => navigate("/menu-stroop")}>Stroop</Nav.Link>

            <NavDropdown title="Stats" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/Uso-data")}>
                Uso
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/Sudotype-data")}>
                Sudotype
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/stroop-data")}>
                Stroop
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="Register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppNavBar;
