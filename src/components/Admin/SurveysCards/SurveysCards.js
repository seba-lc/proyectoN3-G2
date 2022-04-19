import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SurveysContext from "../../../context/surveys/SurveysContext";
import "./SurveysCards.css";

const SurveysCards = ({ id, name, state, category, questions, date }) => {
const {updateSurveys} = useContext(SurveysContext)

const handleClick = (e) => {
  updateSurveys(e.target.id);
}

const publicado = (p)=> {
  if(p){
    return {state: false}
  } else {
    return {state: true}
  }
}
  return (
    <Card className="m-1 my-3">
      <Card.Header as="h5">{name}</Card.Header>
      <Card.Body>
        <Card.Title as="h6">Categoria: {category}</Card.Title>
        <div className="d-flex justify-content-between">
        <Link to={`/surveydetail/${id}`} className="nav-link">Ver Encuesta</Link>
        <div className="d-flex">
        <Button id={id} className={state?"me-2 spanSurvaysCardsTrue btnStateTrue p-1":"me-2 spanSurvaysCardsFalse btnStateFalse p-1"} onClick={handleClick}>
        {state?"Publicado":" -Publicar-"}
        </Button>
        </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">{`Nro de preguntas: ${questions?.length}`}<span>Fecha:{date.substring(0, 10)}</span></Card.Footer>
    </Card>
  );
};

export default SurveysCards;
