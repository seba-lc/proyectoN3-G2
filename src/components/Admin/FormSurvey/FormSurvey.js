import { useContext, useEffect } from "react";
import { Form, Col, Row } from "react-bootstrap";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import SelectCategories from "../SelectCategories/SelectCategories";

const FormSurvey = ({handleQuestion}) => {
  const { categories, getCategories } = useContext(CategoriesContext);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Row>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de la encuesta</Form.Label>
        <Form.Control placeholder="Nombre" name="name" onChange={handleQuestion}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select name="category" onChange={handleQuestion}>
          {categories.map((category, index) => (
            <SelectCategories key={index} category={category.name}/>
          ))}
        </Form.Select>
      </Form.Group>
    </Row>
  );
};

export default FormSurvey;
