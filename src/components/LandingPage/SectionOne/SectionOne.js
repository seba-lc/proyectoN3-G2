import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SectionOne = () => {
    return ( 
        <section>
        <Container className="d-flex flex-column justify-content-center align-items-center lp-style">
          <Row className="d-flex flex-column justify-content-center align-items-center">
            <Col className="lp-title-box" xs={12} md={12} lg={12}>
              <h1 className="lp-title flicker-1">
                Encuestas Rolling Code 21i
              </h1>
            </Col>
          </Row>
          <Row className="">
            <Col
              className="d-flex justify-content-center"
              xs={12}
              md={12}
              lg={12}
            >
              <h3 className="lp-subtitle">
                Las mejores encuestas de Internet{" "}
              </h3>
            </Col>
            <Col
              className="d-flex justify-content-center"
              xs={12}
              md={12}
              lg={12}
            >
              <h5 className="lp-subtitle2">Registrate GRATIS </h5>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col
              className="d-flex justify-content-center"
              xs={12}
              md={6}
              lg={6}
            >
              <Link to="/login" className="btn boton d-flex justify-content-center align-items-center">Iniciar Sesión</Link>
            </Col>
            <Col
              className="d-flex justify-content-center"
              xs={12}
              md={6}
              lg={6}
            >
              <Link to="/register" className="btn glow-on-hover border-none d-flex justify-content-center align-items-center">Registrate</Link>
            </Col>
          </Row>
        </Container>
      </section>
     );
}
 
export default SectionOne;