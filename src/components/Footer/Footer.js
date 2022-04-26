import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Logo2 from "../Logo/Logo2";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div fixed="bottom" className="w-100 text-center footer-style">
        <Container fluid>
          <Row >
            <Col xs={12} md={12} lg={4}>
              <h4 className="footer-title">REDES SOCIALES</h4>
              <Link to="/error404" className="h6 footer-link-style">Facebook</Link><br />
              <Link to="/error404" className="h6 footer-link-style">Twitter</Link><br />
              <Link to="/error404" className="h6 footer-link-style">Instagram</Link>
            </Col>
            <Col xs={12} md={12} lg={4} >
            <Logo2 className="footer1"/>
            </Col>
            <Col xs={12} md={12} lg={4} className="p-2">
              <h4 className="footer-title">INFORMACIÓN DE CONTACTO</h4>
              <h6>General Paz 864</h6>
              <h6>encuestasrc@rollingcode.com</h6>
              <h6 >+54 381-652548</h6>
            </Col>            
          </Row>           
          <hr />
          <Row className="last-row">
            <Col xs={12} lg={6} >
            <p>© 2022 Encuestas Rolling Code 21i </p>
            </Col>
            <Col xs={12} lg={6} >
            <Link to="/error404" className="p footer-link-style2">Privacidad y condiciones</Link>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Footer;
