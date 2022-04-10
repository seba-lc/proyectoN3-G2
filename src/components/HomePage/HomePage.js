import { Container, Row, Col } from "react-bootstrap";
import EncuestasCards from "../EncuestasCards/EncuestasCards";
import "./HomePage.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CategoriesContext from './../../context/categories/CategoriesContext'



const HomePage = () => {
  //const [categorie, setCategorie] = useState([]);
  //useEffect(() => {
  //  const getCategories = async () => {
  //    try {
  //      const response = await axios.get("http://localhost:3000/categories/");
  //      const { data } = response;
  //      setCategorie(data);
 //     } catch (error) {
  //      console.warn(error);
  //    }
 //   };
  //  getCategories();
 // }, []);
 // console.log(categorie);

 const {categories, getCategories} = useContext(CategoriesContext);

useEffect(()=>{
  getCategories()
},[]) 

  return (
    
    
   
    <Container
      fluid
      className="d-flex justify-content-center align-items-center homePage-style"
    >
      <Row className="m-1 d-flex  justify-content-center align-items-center">
        
        {categories.map((category, index) => (
          <Col className="m-1" xs={6} md={4} lg={3}>
              <EncuestasCards key={index} category={category} />
              </Col>
            ))} 
        
       
      </Row>
    </Container>
  ); 
    
}

export default HomePage;
