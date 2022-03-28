import {Card} from 'react-bootstrap'
import './EncuestasCards.css'
import styled from 'styled-components';

const MyCard = styled(Card)`
background-color: ${props=>props.color});
border-radius: 296px 147px 371px 201px / 128px 119px 140px 111px;
`

const EncuestasCards = (props) => {
  return (
    <MyCard color={props.color} className="mb-5 d-flex justify-content-center" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </MyCard>
  );
};

export default EncuestasCards;
