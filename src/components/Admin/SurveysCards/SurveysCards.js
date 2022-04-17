import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SurveysCards.css";

const SurveysCards = ({ id, name, state, category, questions }) => {

  return (
    <Card className="m-1" id={id}>
      <Card.Header as="h5">{name}</Card.Header>
      <Card.Body>
        <Card.Title as="h6">Categoria: {category}</Card.Title>
        <div className="d-flex justify-content-between">
        <Link to={`/surveydetail/${id}`} className="nav-link">Ver Encuesta</Link>
        <div className="d-flex">
        {state==='true'?<span className="spanSurvaysCardsTrue p-1">publicada</span>:<span className="spanSurvaysCardsFalse p-1">pendiente</span>}
        </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">{`Nro de preguntas: ${questions.length}`}<span>Fecha:</span></Card.Footer>
    </Card>
  );
};

export default SurveysCards;
