import { useContext, useEffect } from "react";
import { Form, Col, Row } from "react-bootstrap";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import SelectCategories from "../SelectCategories/SelectCategories";

const FormSurvey = ({ handleChange }) => {
  const { categories, getCategories } = useContext(CategoriesContext);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de la encuesta</Form.Label>
        <Form.Control
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select name="category" onChange={handleChange}>
          {categories.map((category, index) => (
            <SelectCategories key={index} category={category.name} />
          ))}
        </Form.Select>
      </Form.Group>
      </Form>
  );
};

export default FormSurvey;
