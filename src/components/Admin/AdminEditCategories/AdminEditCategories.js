import { useContext, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { URL_CATEGORIES } from "../../../constants";
import CategoriesContext from "../../../context/categories/CategoriesContext";

const AdminEditCategories = () => {
  const { categories, getCategories } = useContext(CategoriesContext);

  useEffect(() => {
    getCategories(URL_CATEGORIES);
  }, []);
  return (
    <>
      <Container>
     
        <Form>
       
            <Col className="m-3 d-flex justify-content-end">
            <h3>Categoria</h3>
            <Button className="">Agregar</Button>
            </Col>
        
          {categories?.map((category, index) => (
             <Row className="justify-content-md-center text-center">
              <Col md={6}>
                <Form.Group className="ms-5 mb-3" controlId="formBasicEmail">
                  <Form.Control
                    key={index}
                    type="text"
                    placeholder={category.name}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Button className="me-2" variant="primary" type="submit">
                  Actualizar
                </Button>
                <Button variant="danger" type="submit">
                  Eliminar
                </Button>
              </Col>
              </Row>
          ))}
         
        </Form>
      </Container>
    </>
  );
};

export default AdminEditCategories;
