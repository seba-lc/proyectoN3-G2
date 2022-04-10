import { Container, Row, Col, Button } from "react-bootstrap";
import EncuestasCards from "../EncuestasCards/EncuestasCards";
import "./HomePage.css";
import { useEffect, useContext } from "react";
import CategoriesContext from './../../context/categories/CategoriesContext'
import { Link } from "react-router-dom";

const HomePage = () => {

 const {categories, getCategories} = useContext(CategoriesContext);

useEffect(()=>{
  getCategories()
},[]) 

  return (
   
    <Container fluid className="d-flex flex-column justify-content-center align-items-center homePage-style">
      <Row className="flicker-1">
        <Col className="title-box">
          <h1>Encuestas Rolling Code</h1>
        </Col>
      </Row>
      <Row className="m-1 d-flex  justify-content-center align-items-center">    
        {categories.map((category, index) => (
          <Col key={index} className="m-1" xs={6} md={4} lg={3}>
              <EncuestasCards  category={category} />
              </Col>
            ))}     
      </Row>
      <Row>
        <Col className="main_div">
        <Button className="glow-on-hover border-none">Crear Encuesta</Button>
        </Col>
      </Row>
    </Container>
  ); 
    
}

export default HomePage;
