import { InputGroup, FormControl, Button } from "react-bootstrap";

const QuestionInputAdded = ({ index, question, handleDelete }) => {
   
  return (
    <InputGroup className="my-3">
      <FormControl
        key={index}
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
