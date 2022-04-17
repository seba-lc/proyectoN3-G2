import { Container, Row, Col, Button } from "react-bootstrap";
import EncuestasCards from "../EncuestasCards/EncuestasCards";
import "./HomePage.css";
import { useEffect, useContext } from "react";
import CategoriesContext from "./../../context/categories/CategoriesContext";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const HomePage = () => {
  const { categories, getCategories } = useContext(CategoriesContext);
  const { getAuth } = useContext(UserContext)

  useEffect(() => {
    if(localStorage.getItem('token') !== null){
      getAuth();
    }
    getCategories();
  }, []);

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center homePage-style"
    >
      <Row className="d-flex flex-column justify-content-center align-items-center flicker-1">
        <Col className="title-box" xs={12} md={12} lg={12}>
          <h1 className="titulo">Encuestas Rolling Code</h1>
        </Col> 
      </Row>
      <Row className="m-1 d-flex  justify-content-center align-items-center">
        {categories.map((category, index) => (
          <Col key={index} className="m-1" xs={6} md={4} lg={3}>
            <EncuestasCards category={category} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="">
          <Button className="glow-on-hover home-boton">Crear Encuesta</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
