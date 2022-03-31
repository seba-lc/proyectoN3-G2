import { Card, Button } from "react-bootstrap";
import "./SurveysCards.css";
import styled from "styled-components";

/* const MyCard = styled(Card)`
background-color: ${props=>props.color});
border-radius: 296px 147px 371px 201px / 128px 119px 140px 111px;
` */

const SurveysCards = ({ id, name, state, category }) => {
  return (
    <Card id={id}>
      <Card.Header as="h5">{name}</Card.Header>
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Button variant="primary">Ver mas</Button>
        {console.log({state})}
        <span>{{state}?'Publicado':'Cerrado'}</span>
      </Card.Body>
    </Card>
  );
};

export default SurveysCards;
