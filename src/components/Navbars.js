import { Navbar, Container, Nav } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>WebFilm</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">Trending</Nav.Link>
          <Nav.Link href="#drama">Drama</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
