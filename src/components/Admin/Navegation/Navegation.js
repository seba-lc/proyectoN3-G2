import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './Navegation.css'

const Navegation = () => {
    return ( 
            <Navbar className="navegation" bg="dark" expand="lg" variant="dark">
            <Container>
            <Navbar.Brand href="/admin">Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to="/newsurvey" className="nav-link">Nueva Encuesta</Link>
                        <Link to="/pendingsurveys" className="nav-link" >Encuestas Pendientes</Link>
                        <Link to="/publishedsurveys" className="nav-link" >Encuestas Publicadas</Link>
                        <Link to="/admin" className="nav-link" >Categorias</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
     );
}
 
export default Navegation;