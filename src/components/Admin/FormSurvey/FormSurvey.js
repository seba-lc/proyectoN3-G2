import { Form } from "react-bootstrap";

const FormSurvey = () => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de la encuesta</Form.Label>
        <Form.Control placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select>
          <option>Disabled select</option>
          <option>Disabled select</option>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
    </>
  );
};

export default FormSurvey;
