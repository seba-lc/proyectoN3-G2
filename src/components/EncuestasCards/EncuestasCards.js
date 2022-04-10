import {Card} from 'react-bootstrap'
import './EncuestasCards.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MyCard = styled(Card)`
background-color: var(${props=>props.color}) !important;
border-radius: 10%;

`

const EncuestasCards = ({category}) => {

  return (
    <MyCard id={category.id} color={category.bgColor} className="mb-5 d-flex justify-content-center" >
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>{category.name}</Card.Title>
        <Link to="" variant="primary" className='btn btn-primary' >Another Link</Link>
      </Card.Body>
    </MyCard>
  );
};

export default EncuestasCards;