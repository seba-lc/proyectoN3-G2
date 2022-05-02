import { Form } from "react-bootstrap";
import useForm from "../../../hooks/useForm";
import "./FormGroupMultipleChoice.css";
const FormGroupMultipleChoice = ({ question, index }) => {
  const { admin, handleEdit, handleResponses } = useForm();

  return admin == false ? (
    <Form.Group className="titleColor mb-3">
      <Form.Label>{question.question}</Form.Label>
      {["checkbox"].map((type) => (
        <div key={`default.${index}`} className="mb-3">
          {question.response.map((response, index) => (
            <Form.Check
              type="checkbox"
              key={index}
              name={question.question}
              value={response}
              label={response}
              onMouseUp={handleResponses}
            />
          ))}
        </div>
      ))}
    </Form.Group>
  ) : (
    <div key={`questions${index}`} className="mb-3">
      <Form.Group controlId={index} className="mb-3">
        <Form.Label>
          <h5>Multiple Choice</h5>
        </Form.Label>
        <Form.Control
          name="questions"
          onChange={(e) => handleEdit(e)}
          placeholder={question.question}
          type="text"
        ></Form.Control>
      </Form.Group>

      <Form.Label>
        <h6>Respuestas</h6>
      </Form.Label>
      {question.response.map((response, index) => (
        <Form.Group key={`response${index}`} controlId={index} className="mb-3">
          <Form.Control
            name="response"
            onChange={(e) => handleEdit(e)}
            placeholder={response}
            type="text"
          />
        </Form.Group>
      ))}
    </div>
  );
};

export default FormGroupMultipleChoice;
