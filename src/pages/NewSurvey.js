import { Button, Container } from "react-bootstrap";
import FormSurvey from "../components/Admin/FormSurvey/FormSurvey";
import { useState } from "react";
import ModalSurvey from "../components/Admin/ModalSurvey/ModalSurvey";
import Navegation from "../components/Admin/Navegation/Navegation";

const NewSurvey = ()=>{

    const [show, setShow] = useState(false);
    const initialValues = {
        name:'',
        state:false,
        questions:[],
        response:'',
        category:''
      }
    const [values, setValues] = useState(initialValues);

    const handleQuestion = (e)=>{
        console.log(e.target.name);

        setValues({
          ...values,
          [e.target.name]:e.target.value
        })
    }
    console.log(values);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
    <>
    <Navegation></Navegation>
    <h2 className="mt-3 text-center">Nueva Encuesta</h2>
    <Container className="d-flex flex-column w-50 p-4">
        <FormSurvey handleQuestion={handleQuestion}/>
        <Button variant="outline-primary" onClick={handleShow}>Agregar Pregunta</Button>
    </Container>
    <ModalSurvey handleQuestion={handleQuestion} show={show} handleClose={handleClose}/>
    </>
    );
}

export default NewSurvey;