import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SectionThree = () => {
  return (
    <section>
      <Container className='lp-style3'>
        <Row>
          <Col
            className="d-flex justify-content-center"
            xs={12}
            md={12}
            lg={12}
          >
            <h3 className="st-subtitle">Todo lo que necesitas para una experiencia única está aquí</h3>
          </Col>
          <Col
            className="d-flex justify-content-center"
            xs={12}
            md={12}
            lg={12}
          >
            <h5 className="st-subtitle2">Accede a las encuestas </h5>
          </Col>
          <Col
              className="d-flex justify-content-center  st-boton"
              xs={12}
              md={12}
              lg={12}
            >
               <Link to="/home" className="btn boton border-none d-flex justify-content-center align-items-center">Encuestas</Link>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionThree;
