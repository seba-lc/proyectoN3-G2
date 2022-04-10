import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom"; 
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const {user, setUser} = useContext(UserContext);
  const [headerClass, setHeaderClass] = useState('header-nav');
  
  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    if (userLogged) {
      setUser(userLogged);
    }
    
    window.addEventListener('scroll', ()=>{
      if (window.scrollY==0){
        setHeaderClass('header-nav-top')
      } else{
        setHeaderClass('header-nav-no-top')
      }
    })
  },[]);

  const handleClick = () =>{
    localStorage.clear();
    setUser(null);
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if (window.scrollY==0){
        setHeaderClass('header-nav-top');
      } else{
        setHeaderClass('header-nav-no-top');
      }
    })
  },[]);




  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className={headerClass}>
      <Container>
      <Logo/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav ms-auto" />
        <Navbar.Collapse id="responsive-navbar-nav ">
        {user ? user.role ==='ADMIN'?(
            <>
          <Nav className="m-auto">
          </Nav>
          <Nav>
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
      
    </Navbar>
  );
};

export default Header;
