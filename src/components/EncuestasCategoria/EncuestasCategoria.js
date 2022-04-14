import "./EncuestasCategoria.css";
import { Card, ListGroup, Container } from "react-bootstrap";
import { useEffect } from "react";

const EncuestasCategoria = ({filterSurvey}) => {
  return (
    <div className="d-flex justify-content-center bg-light border px-5 py-2 m-2">{filterSurvey.surveyName}</div>
  );
};

export default EncuestasCategoria;
