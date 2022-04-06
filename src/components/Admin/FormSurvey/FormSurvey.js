import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import useForm from "../../../hooks/useForm";
import SelectCategories from "../SelectCategories/SelectCategories";
import SurveysContext from "../../../context/surveys/SurveysContext"
import ModalSurvey from "../ModalSurvey/ModalSurvey";
import QuestionInputAdded from "../QuestionInputAdded/QuestionInputAdded";

const FormSurvey = () => {
  const [show, setShow] = useState(false);
  const { addSurveys } = useContext(SurveysContext);
  const { categories, getCategories } = useContext(CategoriesContext);

  useEffect(() => {
    getCategories();
  }, []);

  const initialValues = {
    name: "",
    state: false,
    questions: [],
    category: "",
  };

  const sendData = () => {
    addSurveys(values);
  };

  const { handleChange, handleSubmit, handleDelete, values } = useForm(
    initialValues,
    sendData
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(values);


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre de la encuesta</Form.Label>
          <Form.Control
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Select name="category" onChange={handleChange}>
            {categories.map((category, index) => (
              <SelectCategories key={index} category={category.name} />
            ))}
          </Form.Select>
        </Form.Group>
        <div className="d-flex justify-content-around">
        <Button variant="outline-info" onClick={handleShow}>
          Agregar Pregunta Simple
        </Button>
        <Button variant="outline-info" onClick={handleShow}>
          Agregar Multiple Choice
        </Button>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-around">
        <Button variant="outline-success" type="submit">
          Guardar Encuesta
        </Button>
        </div>
        <hr></hr>
        {values.questions.map((question, index)=>(
          <QuestionInputAdded key={index} question={question} values={values} handleDelete={handleDelete}/>
        ))}
      </Form>
      <ModalSurvey
        handleChange={handleChange}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
};

export default FormSurvey;
