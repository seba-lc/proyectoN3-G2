import { Form } from "react-bootstrap";

const FormGroupTitleCategory = ({surveys, edit}) => {

  return edit == false ? (
    <div>
      <h3>{surveys.name}</h3>
      <h5>{surveys.category}</h5>
    </div>
  ) : (
    <div>  
      <Form.Group>
        <Form.Label><h5>Titulo</h5></Form.Label>
        <Form.Control placeholder={surveys.name}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label><h5>Categoria</h5></Form.Label>
        <Form.Control placeholder={surveys.category}></Form.Control>
      </Form.Group>
    </div>
  );
};

export default FormGroupTitleCategory;
