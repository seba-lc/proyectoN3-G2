import { useContext, useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import useForm from "../../../hooks/useForm";
import SurveysContext from "../../../context/surveys/SurveysContext";
import './FormSurvey.css'
import QuestionInputAdded from "../QuestionInputAdded/QuestionInputAdded";
import ModalMultipleChoice from "../ModalMultipleChoise/ModalMultipleChoice";
import { UserContext } from "../../../context/UserContext";
import axiosClient from "../../../config/axiosClient";
import { useNavigate } from "react-router-dom";

const FormSurvey = () => {
  const [showMS, setShowMS] = useState(false);
  const [showMC, setShowMC] = useState(false);
  const [arrayQuestions, setArrayQuestions] = useState([]);
  const { addSurveys } = useContext(SurveysContext);
  const { categories, getCategories } = useContext(CategoriesContext);
  const { user } = useContext(UserContext);
  const [values, setValues] = useState({
    name: "",
    state: false,
    questions: [],
    category: ""
  })
  let navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);
  
  const initialValues = {
    name: "",
    state: false,
    answers: [],
    category: "",
  };

  const sendData = async () => {
    try {
      let arrayIds = [];
      for(let i = 0; i < values.questions.length; i++){
        const response = await axiosClient.post('/question', values.questions[i]);
        arrayIds.push(response.data);
      }
      const valuesDB = {
        ...values,
        questions: arrayIds
      }
      addSurveys(valuesDB);
      if(user.role === 'ADMIN'){
        
        navigate('/pendingsurveys')
      }else{
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { handleChange, handleSubmit, handleDelete } =
    useForm(sendData, setValues, values);

  const handleCloseMS = () => setShowMS(false);
  const handleShowMS = () => setShowMS(true);
  const handleCloseMC = () => setShowMC(false);
  const handleShowMC = () => setShowMC(true);

  return (
    
    <Container className="survey3-box text-center">
    <h2 className="mt-3 text-center form-title">Crear Encuesta</h2>
      <Form className="surveyForm-box p-5"  onSubmit={handleSubmit}>
        <Form.Group className="mb-3 form-title">
          <Form.Label>Nombre de la encuesta</Form.Label>
          <Form.Control
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 form-title">
          <Form.Label>Categoría</Form.Label>
          <Form.Select name="category" onChange={handleChange}>
            <option>-- Seleccione una categoría --</option>
            {categories?.map((category, index) => (
              <option key={index} value={category.categoryName}>{category.categoryName}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <div className="d-flex justify-content-around">
          <Button variant="outline-info" className="mt-3 w-100" onClick={handleShowMC}>
            Generar Pregunta
          </Button>
          {/* <Button variant="outline-info" onClick={handleShowMS} disabled>
            Pregunta Simple
          </Button>
          <Button variant="outline-info" disabled>Pregunta con Imagen</Button> */}
        </div>
        <hr></hr>
        <hr></hr>
        {values.questions?.map((question, index) => (
          <QuestionInputAdded
            key={index}
            question={question}
            handleDelete={handleDelete}
          />
        ))}
        <div className="d-flex justify-content-around">
          <Button className="w-100" variant="outline-success" type="submit">
            Guardar Encuesta
          </Button>
        </div>
      </Form>

      {/* <ModalSurvey
        handleChange={handleChange}
        showMS={showMS}
        handleCloseMS={handleCloseMS}
      /> */}

      <ModalMultipleChoice
        handleChange={handleChange}
        showMC={showMC}
        handleCloseMC={handleCloseMC}
      />
    </Container>
  );
};

export default FormSurvey;
