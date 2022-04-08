import "./Header.css";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom"; 
import { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";


const MyNavbar = styled(Navbar)`
    height: 12vh;
    background-color: var(--azure);
    font-family: var(--letra1);
    font-size: 20px;
    position: sticky;
    top: 0;
    z-index: 13
  `;
const Header = () => {
  const {user, setUser} = useContext(UserContext);
  
  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    if (userLogged) {
      setUser(userLogged);
    }
  },[]);
  const handleClick = () =>{
    localStorage.clear();
    setUser(null);
  }


  return (
    <MyNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Logo/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {user ? user.role ==='ADMIN'?(
            <>
          <Nav className="m-auto">
          </Nav>
          <Nav>
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">4</NavDropdown.Item>
            </NavDropdown>
              <Link to="/" onClick={handleClick} className="nav-link">
                Cerrar sesión
              </Link>
            </Nav>
            </>
        ) :(
          <>
          <Nav>
          <Link to="/admin" className="nav-link">Administración</Link>
            </Nav>
            </>
        ) :(
          <Nav className="ms-auto">
                <Link to="/Login" className="nav-link">
                Iniciar sesión
                </Link>
                <Link className="nav-link" to='/Register'>
                  Registrarse
                </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
      
    </MyNavbar>
  );
};

export default Header;
