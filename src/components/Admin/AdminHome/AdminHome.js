import { Link } from 'react-router-dom';
import './AdminHome.css'
import { Button, Container } from 'react-bootstrap';
import EncuestasCards from '../../EncuestasCards/EncuestasCards';

const AdminHome = () => {
  return (

<>
    <Container>
      <section className= "d-flex ">
         <Button variant="outline-primary">Nueva Encuesta</Button>
         <Button variant="outline-primary">Encuestas Pendientes</Button>
         <Button variant="outline-primary">Todas las encuestas</Button>
         <Button variant="outline-primary">Encuestas cerradas</Button>
      </section>
      <EncuestasCards></EncuestasCards>
    </Container>

    
    {/* <div className='adminHome-style'>
       
      <span className='display-6 mb-5'>Soy el Home de Admin</span>
      <Link to='/'>Volver</Link>
    </div> */}
</>
  );
};

export default AdminHome;