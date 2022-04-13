import { Form } from "react-bootstrap";

const FormGroupQuestionWithImage = ({question, index}) => {
    return ( 
        <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
        </Form.Group>
     );
}
 
export default FormGroupQuestionWithImage;