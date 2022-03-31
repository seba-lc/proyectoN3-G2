import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Navegation = () => {
    return ( 
            <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
            <Navbar.Brand href="/admin">Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to="/NewSurvey" className="nav-link">Nueva Encuesta</Link>
                        <Link to="/" className="nav-link" >Encuestas Pendientes</Link>
                        <Link to="/" className="nav-link" >Encuestas Publicadas</Link>
                        <Link to="/AllSurveys" className="nav-link" >Todas las Encuestas</Link>
                        <Link to="/" className="nav-link" >Categorias</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
     );
}
 
export default Navegation;