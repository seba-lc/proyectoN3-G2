import {Container, Row, Col} from 'react-bootstrap'
import cami2 from "./../../../assets/img/cami-feliz.png";
import seba2 from "./../../../assets/img/seba-feliz copia.png"
import carlos2 from "./../../../assets/img/carlos-feliz copia.png"
import sergio2 from './../../../assets/img/sergio-feliz.png'

const SectionTwo = () => {
    return ( 
        <section>
        <Container
          fluid
          className="d-flex justify-content-center color-change-5x lp-style2"
        >
          <Row>
            <Col
              className="d-flex justify-content-center"
              xs={12}
              md={12}
              lg={12}
            >
              <h1 className="lp-group-title">NUESTRO EQUIPO</h1>
            </Col>
            <Col
              className="d-flex flex-column justify-content-center align-items-center"
              xs={12}
              md={6}
              lg={3}
            >
              <img className="lp-img" src={seba2} alt="" />
              <h4 className="lp-group">Sebastián</h4>
            </Col>
            <Col
              className="d-flex flex-column justify-content-center align-items-center"
              xs={12}
              md={6}
              lg={3}
            >
              <img className="lp-img" src={carlos2} alt="" />
              <h4 className="lp-group">Carlos</h4>
            </Col>
            <Col
              className="d-flex flex-column justify-content-center align-items-center"
              xs={12}
              md={6}
              lg={3}
            >
              <img className="lp-img" src={cami2} alt="" />
              <h4 className="lp-group">Camila</h4>
            </Col>
            <Col
              className="d-flex flex-column justify-content-center align-items-center"
              xs={12}
              md={6}
              lg={3}
            >
              <img className="lp-img" src={sergio2} alt="" />
              <h4 className="lp-group">Sergio</h4>
            </Col>
          </Row>
        </Container>
      </section>
     );
}
 
export default SectionTwo;