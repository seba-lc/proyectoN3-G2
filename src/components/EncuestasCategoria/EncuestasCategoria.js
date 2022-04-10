import "./EncuestasCategoria.css";
import { Card, ListGroup, Container } from "react-bootstrap";

const EncuestasCategoria = ({survey}) => {
    console.log(survey);
  return (
    <Container className="m-5 d-flex flex-column justify-content-center align-items-center">
      <Card fluid>
        <ListGroup variant="flush">
          <ListGroup.Item action></ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default EncuestasCategoria;
