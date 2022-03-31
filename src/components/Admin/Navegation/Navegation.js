import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Navegation = () => {
    return ( 
        <Navbar bg="danger" expand="lg" variant="dark">
            <Navbar.Brand href="/">Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to="/" className="nav-link" >ejemplo</Link>

                    </Nav>
                </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Navegation;