import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import useForm from "../../../hooks/useForm";
import SelectCategories from "../SelectCategories/SelectCategories";
import SurveysContext from "../../../context/surveys/SurveysContext";
import ModalSurvey from "../ModalSurvey/ModalSurvey";
import QuestionInputAdded from "../QuestionInputAdded/QuestionInputAdded";
import ModalMultipleChoice from "../ModalMultipleChoise/ModalMultipleChoice";

const FormSurvey = () => {
  const [showMS, setShowMS] = useState(false);
  const [showMC, setShowMC] = useState(false);
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
    setearState();
  };

  const { handleChange, handleSubmit, handleDelete, setearState, values } =
    useForm(initialValues, sendData);

  const handleCloseMS = () => setShowMS(false);
  const handleShowMS = () => setShowMS(true);
  const handleCloseMC = () => setShowMC(false);
  const handleShowMC = () => setShowMC(true);

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
          <Button variant="outline-info" onClick={handleShowMS}>
            Pregunta Simple
          </Button>
          <Button variant="outline-info">Pregunta con Imagen</Button>
          <Button variant="outline-info" onClick={handleShowMC}>
            Multiple Choice
          </Button>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-around">
          <Button variant="outline-success" type="submit">
            Guardar Encuesta
          </Button>
        </div>
        <hr></hr>
        {values.questions.map((question, index) => (
          <QuestionInputAdded
            key={index}
            question={question}
            values={values}
            handleDelete={handleDelete}
          />
        ))}
      </Form>
      <ModalSurvey
        handleChange={handleChange}
        showMS={showMS}
        handleCloseMS={handleCloseMS}
      />
      <ModalMultipleChoice
        handleChange={handleChange}
        showMC={showMC}
        handleCloseMC={handleCloseMC}
      />
    </>
  );
};

export default FormSurvey;
