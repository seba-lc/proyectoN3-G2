import "./CategoriesPage.css";
import { Container, ListGroup, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  return (
    <Container className="m-5 d-flex flex-column justify-content-center align-items-center">
    <h3 className="pb-3">TÍTULO</h3>
      <Card fluid >
        <ListGroup variant="flush">
          <ListGroup.Item action >Encuesta 1</ListGroup.Item>
          <ListGroup.Item action >Encuesta 2</ListGroup.Item>
          <ListGroup.Item action >Encuesta 3</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default CategoriesPage;
