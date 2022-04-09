import { Form } from "react-bootstrap";

const FormGroupMultipleChoice = ({question, index}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{question.question}</Form.Label>
      {["checkbox"].map((type) => (
        <div key={`default.${index}`} className="mb-3">
          {question.response.map((response, index)=>(
            <Form.Check
            type="checkbox"
            key={index}
            label={response}
            />
          ))}
        </div>
      ))}
    </Form.Group>
  );
};

export default FormGroupMultipleChoice;
