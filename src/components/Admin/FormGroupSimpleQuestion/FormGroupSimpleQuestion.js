import { Form, FormControl } from "react-bootstrap";
import useForm from "../../../hooks/useForm";
import "./FormGroupSimpleQuestion.css";

const FormGroupSimpleQuestion = ({ question, index }) => {
  const { admin, handleEdit, handleResponses } = useForm();

  return admin == false ? (
    <Form.Group className="mb-3 titleColor" key={index}>
      <Form.Label>{question.question}</Form.Label>
      <FormControl
        name={question.question}
        onChange={handleResponses}
        required
      ></FormControl>
    </Form.Group>
  ) : (
    <Form.Group key={`questions${index}`} controlId={index} className="mb-3">
      <Form.Label>
        <h5>Pregunta Simple</h5>
      </Form.Label>
      <FormControl
        onChange={(e) => handleEdit(e)}
        name="questions"
        placeholder={question.question}
        type="text"
      ></FormControl>
    </Form.Group>
  );
};

export default FormGroupSimpleQuestion;
