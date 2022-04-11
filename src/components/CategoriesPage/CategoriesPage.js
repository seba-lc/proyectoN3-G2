import "./CategoriesPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useContext, useState } from "react";
import SurveysContext from "./../../context/surveys/SurveysContext";
import EncuestasCategoria from "../EncuestasCategoria/EncuestasCategoria";
import useGet from './../../hooks/useGet'
import { useParams } from "react-router-dom";

const CategoriesPage = ({}) => {
  const { surveys, getSurveys } = useContext(SurveysContext);
  const params = useParams();
  const [filerSurveys, setFilterSurveys] = useState([]);

  useEffect(() => {
    getSurveys();
  }, []);

  useEffect(() => {
    const surveysSup = surveys;
    const filteredSurveys = surveysSup.filter(item => item.category === params.category);
    setFilterSurveys(filteredSurveys);
  }, [surveys])


  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center homePage-style">
      <Row>
        <Col>
          <h3 className="pb-3">titulo</h3>
        </Col>
      </Row>
      <Row className="m-1 d-flex  justify-content-center align-items-center">
        {filerSurveys.map((survey,index)=>(
          <Col key={index}>
          <EncuestasCategoria name={survey}/>
        </Col>
        ))}
        
      </Row>
    </Container>
  );
};

export default CategoriesPage;
