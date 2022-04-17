import { Container, Row, Col } from 'react-bootstrap';
import './ErrorPage.css'
import cami1 from './../../assets/img/cami-asustada.png'
import cami3 from './../../assets/img/cami-asustada2.png'
import cami4 from './../../assets/img/cami-clown.png'


const ErrorPage = () => {
    return ( 

    <Container className="d-flex flex-column justify-content-center align-items-center errorPage-style">
        <Row>
            <Col> 
            <h1 className='error-title text-flicker-out-glow'>Error 404</h1>
            </Col>          
        </Row>
        <Row>
        <Col>
            <h3 className='frase-error flicker-4 '>Elige a quien despedir</h3>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center' xs={12} md={6} lg={3}>
            <img className='error-group' src={cami1} alt="" />
            </Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} md={6} lg={3}>
            <img className='error-group' src={cami3} alt="" />
            </Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} md={6} lg={3}>
            <img className='error-group' src={cami4} alt="" />
            </Col>
            <Col className='d-flex justify-content-center align-items-center' xs={12} md={6} lg={3}>
            <img className='error-group' src={cami1} alt="" />
            </Col>
        </Row>

    </Container>
     );
}
 
export default ErrorPage;