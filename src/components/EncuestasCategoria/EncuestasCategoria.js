import "./EncuestasCategoria.css";
import { Card, ListGroup, Container } from "react-bootstrap";
import { useEffect } from "react";

const EncuestasCategoria = ({name}) => {
  
  useEffect(() => {
    console.log(name);
  }, [])
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
