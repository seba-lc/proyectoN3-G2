import { Form, FormControl } from "react-bootstrap";
import useForm from "../../../hooks/useForm";

const FormGroupSimpleQuestion = ({ question, index, edit, initialValues }) => {
  const { values, handleEditt } = useForm(initialValues)


  
  return edit == false ? (
    <Form.Group className="mb-3" key={index}>
      <Form.Label>{question.question}</Form.Label> 
      <FormControl></FormControl>
    </Form.Group>
  ) : (
    <Form.Group className="mb-3 ps-5" key={index}> 
    <Form.Label><h5>Pregunta Simple</h5></Form.Label>
      <FormControl onChange={(e)=>handleEditt(e)} placeholder={question.question}></FormControl>
    </Form.Group>
  );
};

export default FormGroupSimpleQuestion;
