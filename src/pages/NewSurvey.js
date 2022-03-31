import { Button, Container } from "react-bootstrap";
import FormSurvey from "../components/Admin/FormSurvey/FormSurvey";
import { useState } from "react";
import ModalSurvey from "../components/Admin/ModalSurvey/ModalSurvey";
import Navegation from "../components/Admin/Navegation/Navegation";


const NewSurvey = ()=>{
    const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
    return(
    <>
    <Navegation></Navegation>
    <Container className="d-flex flex-column w-50 p-4">
        <FormSurvey></FormSurvey>
        <Button variant="outline-primary" onClick={handleShow}>Agregar Preguntas</Button>
    </Container>
    <ModalSurvey show={show} handleClose={handleClose}/>
    </>
    );
}

export default NewSurvey;