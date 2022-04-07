import { useContext } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

const QuestionInputAdded = ({ question, handleDelete }) => {
   

  return (
   
    <InputGroup className="my-3">
      <FormControl
        placeholder={Object.values(question).slice(0,1)}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        name="questions"
      />
      <Button variant="outline-danger" onClick={handleDelete} type="text" id={Object.values(question).slice(0,1)}>
        Eliminar
      </Button>
    </InputGroup>
  );
};

export default QuestionInputAdded;
