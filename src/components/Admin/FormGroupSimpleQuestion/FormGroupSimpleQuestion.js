import {Form} from 'react-bootstrap'

const FormGroupSimpleQuestion = ({question, index}) => {
    return ( 
        <Form.Group className="mb-3" key={index}>
            <Form.Label>{question.question}</Form.Label>
            <Form.Label></Form.Label>
            <Form.Control />
        </Form.Group>
     );
}
 
export default FormGroupSimpleQuestion;