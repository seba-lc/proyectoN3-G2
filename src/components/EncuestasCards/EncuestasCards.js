import {Card} from 'react-bootstrap'
import './EncuestasCards.css'
import styled from 'styled-components';

const MyCard = styled(Card)`
background-color: ${props=>props.color});
border-radius: 10%;
`

const EncuestasCards = (props) => {
  return (
    <MyCard fluid bg-color={props.color} className="mb-5 d-flex justify-content-center" >
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="/Categories">Another Link</Card.Link>
      </Card.Body>
    </MyCard>
  );
};

export default EncuestasCards;