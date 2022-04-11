import { Form } from "react-bootstrap";
import useForm from "../../../hooks/useForm";

const FormGroupTitleCategory = ({surveys, edit, values}) => {
  const { handleEditt } = useForm(values)
  return edit == false ? (
    <div>
      <h3>{surveys.name}</h3>
      <h5>{surveys.category}</h5>
    </div>
  ) : (
    <div>  
      <Form.Group>
        <Form.Label><h5>Titulo</h5></Form.Label>
        <Form.Control name="name" placeholder={surveys.name} onChange={(e)=>handleEditt(e)}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label><h5>Categoria</h5></Form.Label>
        <Form.Control name="category" placeholder={surveys.category}></Form.Control>
      </Form.Group>
    </div>
  );
};

export default FormGroupTitleCategory;
