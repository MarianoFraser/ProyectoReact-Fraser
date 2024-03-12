import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Toys For All</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sensoriales</Nav.Link>
            <Nav.Link href="#features">Motricidad Fina</Nav.Link>
            <Nav.Link href="#pricing">Estimulacion</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};

