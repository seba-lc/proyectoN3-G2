import "./Header.css";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const Header = () => {
  const MyNavbar = styled(Navbar)`
    height: 12vh;
    background-color: var(--azure);
    font-family: var(--letra1);
    font-size: 20px;
    position: sticky;
    top: 0;
  `;

  return (
    <MyNavbar collapseOnSelect expand="lg" variant="dark">
      
      <Container>
        <Logo/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Admin</Nav.Link>
            <Nav.Link href="#memes">Cerrar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </MyNavbar>
  );
};

export default Header;
