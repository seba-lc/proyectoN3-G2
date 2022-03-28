import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  return (
      <div fixed="bottom" className="w-100 text-center footer-style">
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={4}>
              <Logo />
            </Col>
            <Col xs={12} md={12} lg={4}>
              <h3>REDES SOCIALES</h3>
              <h5>Facebook</h5>
              <h5>Twitter</h5>
              <h5>Instagram</h5>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <h3>INFORMACIÓN DE CONTACTO</h3>
              <h5>General Paz 864</h5>
              <h5>encuestasrc@rollingcode.com</h5>
              <h5>+54 381-652548</h5>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
  );
};

export default Footer;
