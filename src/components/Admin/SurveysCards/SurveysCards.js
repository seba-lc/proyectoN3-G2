import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { UserContext } from "../../../context/UserContext";
import ButtonsForAdmin from "../ButtonsForAdmin/ButtonsForAdmin";
import "./SurveysCards.css";

const SurveysCards = ({ id, name, state, category, questions, date }) => {
  const { updateSurveys } = useContext(SurveysContext);
  const { user } = useContext(UserContext);
  const handleClick = (e) => {
    updateSurveys(e.target.id);
  };

  return (
    <Card className="m-1 my-3 card-survey">
      <Card.Header as="h5" className="text-center">
        {name}
      </Card.Header>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title as="h6" className="card-category">
          Categoria: {category}
        </Card.Title>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Link to={`/surveydetail/${id}`} className="nav-link">
            Ver Encuesta
          </Link>
          <Button
            id={id}
            className={
              state
                ? "me-2 spanSurvaysCardsTrue btnStateTrue p-1"
                : "me-2 spanSurvaysCardsFalse btnStateFalse p-1"
            }
            onClick={handleClick}
          >
            {state ? "Publicado" : " Publicar"}
          </Button>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <div className="d-flex flex-column">
          {`Nro de preguntas: ${questions?.length}`}
          <span>Fecha: {date.substring(0, 10)}</span>
        </div>
        <div>
          <span>
            {user?.role === "ADMIN" ? <ButtonsForAdmin id={id} /> : null}
          </span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SurveysCards;
