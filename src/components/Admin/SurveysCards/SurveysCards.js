import { Card, Button } from "react-bootstrap";
import "./SurveysCards.css";

/* const MyCard = styled(Card)`
background-color: ${props=>props.color});
border-radius: 296px 147px 371px 201px / 128px 119px 140px 111px;
` */

const SurveysCards = ({ id, name, state, category }) => {

  return (
    <Card className="m-4" id={id}>
      <Card.Header as="h4">{name}</Card.Header>
      <Card.Body>
        <Card.Title as="h6">Categoria: {category}</Card.Title>
        <div className="d-flex justify-content-between">
        <Button variant="outline-info">Ver Encuesta</Button>
        <div className="d-flex">
        {state=='true'?<span className="spanSurvaysCardsTrue p-1">publicada</span>:<span className="spanSurvaysCardsFalse p-1">pendiente</span>}
        </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Fecha:</Card.Footer>
    </Card>
  );
};

export default SurveysCards;
