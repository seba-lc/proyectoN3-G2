import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navegation.css";

const Navegation = () => {
  return (
    <Navbar className="navegation" bg="dark" expand="lg" variant="dark">
      <Container>
        {/* <Link to="/admin" className="navbar-brand">Admin</Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="d-dlex justify-content-end"
          id="basic-navbar-nav"
        >
          <Nav>
            <Link to="/newsurvey" className="nav-link">
              Nueva Encuesta
            </Link>
            <Link to="/pendingsurveys" className="nav-link">
              Encuestas Pendientes
            </Link>
            <Link to="/publishedsurveys" className="nav-link">
              Encuestas Publicadas
            </Link>
            <Link to="/editcategories" className="nav-link">
              Categorias
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegation;
