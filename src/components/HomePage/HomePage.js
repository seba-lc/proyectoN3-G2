import { Container, Row, Col } from "react-bootstrap";
import EncuestasCards from "../EncuestasCards/EncuestasCards";
import "./HomePage.css";

const HomePage = () => {
  return (
  
      <Container fluid className="d-flex justify-content-center align-items-center homePage-style">
        <Row  className='m-1 d-flex justify-content-center align-items-center'>
          <Col className="m-1" xs={6} md={4} lg={3}><EncuestasCards bg-color="var(--azure)"/></Col>
          <Col className="m-1" xs={6} md={4} lg={3}><EncuestasCards/></Col>
          <Col className="m-1" xs={6} md={4} lg={3}><EncuestasCards/></Col>
          <Col className="m-1" xs={6} md={4} lg={3}><EncuestasCards/></Col>
          <Col className="m-1" xs={6} md={4} lg={3}><EncuestasCards/></Col>
          <Col className="m-1" xs={6} md={4} lg={3}><EncuestasCards/></Col>
        </Row> 
      </Container>
  
  );
};

export default HomePage;
