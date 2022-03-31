import { Link } from 'react-router-dom';
import { useState } from 'react';
import './AdminHome.css'
import { Button, Container } from 'react-bootstrap';
import EncuestasCards from '../../EncuestasCards/EncuestasCards';
import ModalSurveys from '../ModalSurveys/ModalSurveys';
import Navegation from '../Navegation/Navegation';

const AdminHome = () => {
  const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
  
  return (

<>
    <Navegation></Navegation>
    <Container>
      <section className= "d-flex ">
         <Button variant="outline-primary" onClick={handleShow}>Nueva Encuesta</Button>
         <Button variant="outline-primary">Encuestas Pendientes</Button>
         <Button variant="outline-primary">Todas las encuestas</Button>
         <Button variant="outline-primary">Encuestas cerradas</Button>
      </section>
      <ModalSurveys show={show} handleClose={handleClose}/>
      <EncuestasCards/>
    </Container>
</>
  );
};

export default AdminHome;