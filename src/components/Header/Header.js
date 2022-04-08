import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom'
import { useState } from "react";

const Header = () => {
  const MyNavbar = styled(Navbar)`
    height: 12vh;
    background-color: var(--azure);
    font-family: var(--letra1);
    font-size: 20px;
    position: sticky;
    top: 0;
    z-index: 13
  `;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogged = JSON.parse(localSotrage.getItem('user'));
    if(userLogged){
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
          <Nav className="m-auto">
          </Nav>
          <Nav>
            <Link to="/admin" className="nav-link">Admin</Link>
            <Link to="/" onClick={handleClick} className="nav-link">Cerrar Sesión</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </MyNavbar>
  );
};

export default Header;
