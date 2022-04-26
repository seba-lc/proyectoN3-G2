import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';

const SectionOne = () => {

  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    if (userLogged) {
      setUser(userLogged);
    }
    
  },[]);

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
          {user ? ( 
            <>
            <Row className="">
              <Col
                className="d-flex justify-content-center"
                xs={12}
                md={12}
                lg={12}
              >
                <h3 className="lp-subtitle">
                  Las mejores encuestas de Internet
                </h3>
              </Col>    
              <Col
                className="d-flex justify-content-center"
                xs={12}
                md={12}
                lg={12}
              >
                <h5 className="lp-subtitle2">Miralas AQUÍ </h5>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col
                className="d-flex justify-content-center"
                xs={12}
                md={12}
                lg={12}
              >
                <Link to="/home" className="btn boton d-flex justify-content-center align-items-center">Encuestas</Link>
              </Col>
            </Row>
            </>
          ) :( 
            <>
          <Row className="">
            <Col
              className="d-flex justify-content-center"
              xs={12}
              md={12}
              lg={12}
            >
              <h3 className="lp-subtitle">
                Las mejores encuestas de Internet
              </h3>
            </Col>    
            <Col
              className="d-flex justify-content-center"
              xs={12}
              md={12}
              lg={12}
            >
              <h5 className="lp-subtitle2">Crea tus propias encuestas Registrándote GRATIS</h5>
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
          </>
          )}
        </Container>
      </section>
     );
};
 
export default SectionOne;