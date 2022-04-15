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
  const [filterSurveys, setFilterSurveys] = useState([]);

  useEffect(() => {
    getSurveys(params.category.toLowerCase());
  }, []);

  useEffect(() => {
    setFilterSurveys(surveys);
  }, [surveys])


  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center homePage-style">
      <Row>
        <Col>
          <h3 className="pb-3 text-light">Encuestas de {params.category}</h3>
        </Col>
      </Row>
      <Row className="m-1 d-flex  justify-content-center align-items-center">
        {
          filterSurveys.length !== 0 ? (
            filterSurveys.map((item, index)=> <EncuestasCategoria key={index} filterSurvey={item} />)
          ) : <div className="d-flex justify-content-center bg-light border px-5 py-2 m-2">Al momento no hay encuestas disponibles en esta categoría</div>
        }
      </Row>
    </Container>
  );
};

export default CategoriesPage;
