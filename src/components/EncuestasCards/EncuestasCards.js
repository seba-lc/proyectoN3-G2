import {Card} from 'react-bootstrap'
import './EncuestasCards.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MyCard = styled(Card)`
background-color: var(${props=>props.color}) !important;
border-radius: 15px;
color: white;
box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const EncuestasCards = ({category}) => {

  return (
    <MyCard id={category._id} color={category.bgColor} className="mb-5 d-flex justify-content-center my-card" >
      <Card.Body className="d-flex flex-column justify-content-center align-items-center my-card2">
        <Card.Title className="card-title-e box-pop-up-top">{category.categoryName.substring(0,1) + category.categoryName.substring(1).toLowerCase()}</Card.Title>
        <Link to={"/categories/" + category.categoryName.substring(0,1) + category.categoryName.substring(1).toLowerCase()} className='btn-card m-3 p-1' >Ver Encuestas</Link>
      </Card.Body>
    </MyCard>
  );
};

export default EncuestasCards;

//category.categoryName.substring(0,1) + category.categoryName.substring(1).toLowerCase()