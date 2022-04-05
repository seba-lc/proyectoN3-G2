import { Button, Container, Form } from "react-bootstrap";
import FormSurvey from "../components/Admin/FormSurvey/FormSurvey";
import { useContext, useState } from "react";
import ModalSurvey from "../components/Admin/ModalSurvey/ModalSurvey";
import Navegation from "../components/Admin/Navegation/Navegation";
import useForm from "../hooks/useForm";
import SurveysContext from "../context/surveys/SurveysContext";

const NewSurvey = () => {
  const [show, setShow] = useState(false);
  const {addSurveys} = useContext(SurveysContext)
  const initialValues = {
    name: "",
    state: false,
    questions: [],
    response: [],
    category: "",
  };
  const sendData = ()=>{
    addSurveys(values)
  }
  const {handleChange, handleSubmit, values} = useForm(initialValues, sendData )

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(values);
  return (
    <>
      <Navegation></Navegation>
      <h2 className="mt-3 text-center">Nueva Encuesta</h2>
      <Container className="d-flex flex-column w-50 p-4">
        {/* //<Form onSubmit={handleSubmit}> */}
        <FormSurvey handleChange={handleChange} />
        <Button variant="outline-primary" onClick={handleShow}>
          Agregar Pregunta
        </Button>
        <Button variant="outline-primary" type="submit">Guardar Encuesta</Button>
       {/*  </Form> */}
      </Container>
      <ModalSurvey
          handleChange={handleChange}
          show={show}
          handleClose={handleClose}
        />
    </>
  );
};

export default NewSurvey;
