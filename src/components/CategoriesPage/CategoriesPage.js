import "./CategoriesPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useContext } from "react";
import SurveysContext from "./../../context/surveys/SurveysContext";
import EncuestasCategoria from "../EncuestasCategoria/EncuestasCategoria";
import useGet from './../../hooks/useGet'

const CategoriesPage = ({}) => {

  //const categorie = useGet('http://localhost:3004/surveys/' + category.id)

  const { surveys, getSurveys } = useContext(SurveysContext);
console.log(surveys);
  useEffect(() => {
    getSurveys();
  }, []);

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center homePage-style">
      <Row>
        <Col>
          <h3 className="pb-3">titulo</h3>
        </Col>
      </Row>
      <Row className="m-1 d-flex  justify-content-center align-items-center">
        {surveys.map((survey,index)=>(
          <Col key={index}>
          <EncuestasCategoria name={survey}/>
        </Col>
        ))}
        
      </Row>
    </Container>
  );
};

export default CategoriesPage;
