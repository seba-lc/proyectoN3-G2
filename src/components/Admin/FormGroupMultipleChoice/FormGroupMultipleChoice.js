import { Form } from "react-bootstrap";
import useForm from "../../../hooks/useForm";

const FormGroupMultipleChoice = ({ question, index, edit, values }) => {

  const { handleEditt } = useForm(values)

  return edit == false ? (
    <Form.Group className="mb-3">
      <Form.Label>{question.question}</Form.Label>
      {["checkbox"].map((type) => (
        <div key={`default.${index}`} className="mb-3">
          {question.response.map((response, index) => (
            <Form.Check type="checkbox" key={index} label={response} />
          ))}
        </div>
      ))}
    </Form.Group>
  ) : (
    <div>
        <Form.Group controlId="question" className="mb-3">
        <Form.Label><h5>Multiple Choice</h5></Form.Label>
        <Form.Control name="questions" placeholder={question.question} onChange={(e)=>handleEditt(e)}></Form.Control>
        </Form.Group>

          <div  className="mb-3">
          <Form.Label><h6>Respuestas</h6></Form.Label>
            {question.response.map((response, index) => (
              <Form.Group controlId="response" key={index} className="mb-3"> 
              <Form.Control name="response" onChange={(e)=>handleEditt(e)} key={index} placeholder={response} type="text"/> 
              </Form.Group>     
            ))}
          </div>
         
     

    </div>
    
  );
};

export default FormGroupMultipleChoice;
