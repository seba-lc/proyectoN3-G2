import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom"; 
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const {user, setUser, getAuth, setAuth, getAdminAuth } = useContext(UserContext);
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

    if(localStorage.getItem('token') !== null){
      getAuth();
    }
    if(localStorage.getItem('adminToken') !== null){
      getAdminAuth();
    }
  },[]);

  const handleClick = () =>{
    if(localStorage.getItem('token')){
      localStorage.removeItem('token');
    }
    if(localStorage.getItem('adminToken')){
      localStorage.removeItem('adminToken');
    }
    setUser(null);
    setAuth(false);
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
    <Navbar collapseOnSelect expand="lg" variant="dark" className="header-nav-no-top">
      <Container className="d-flex align-items-center">
        <Link to="/" className="logo-nav">
        <Logo />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav ms-auto" />
        <Navbar.Collapse id="responsive-navbar-nav ">
        {user ? (
            <>
            <Nav className="ms-auto">
            <hr />
              <Link to="/home" className="nav-link ms-auto encuestas-link">
                Encuestas
                </Link> 
            {
            user ? (user.role === 'ADMIN' ? (
                <Link to="/pendingsurveys" className="nav-link">
                  Administración
                </Link>
            ) : null) : null
          }
              <Link to="/" onClick={handleClick} className="nav-link">
                Cerrar sesión
              </Link>
            </Nav>
            </>
        ) :( 
          <>         
          <Nav className="ms-auto">
            <hr />
                <Link to="/home" className="nav-link ms-auto encuestas-link">
                Encuestas
                </Link> 
            <hr />
                <Link to="/Login" className="nav-link">
                Iniciar sesión
                </Link>
                <hr />
                <Link className="nav-link" to='/Register'>
                  Registrarse
                </Link>
            </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>   
    </Navbar>
  );
};

export default Header;
