import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL_SURVEYS } from "../../../constants";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col, Container, Form } from "react-bootstrap";
import FormGroupSimpleQuestion from "../FormGroupSimpleQuestion/FormGroupSimpleQuestion";
import FormGroupMultipleChoice from "../FormGroupMultipleChoice/FormGroupMultipleChoice";
import FormGroupQuestionWithImage from "../FormGroupQuestionWithImage/FormGroupQuestionWithImage";
import ButtonsForAdmin from "../ButtonsForAdmin/ButtonsForAdmin";
import useForm from "../../../hooks/useForm";
import FormGroupTitleCategory from "../FormGroupTitleCategory/FormGroupTitleCategory";

const FormSurveyDetail = () => {
  const { surveys, getSurveys } = useContext(SurveysContext);
  const params = useParams();

  useEffect(() => {
    getSurveys(URL_SURVEYS + params.id);
  }, []);

  const initialValues = {
    name: "",
    state: false,
    questions: [],
    category: "",
  };

  const { edit } = useForm()


  return (
    <>
    <Container className="py-3">
      <Row>
        <div className="border border-dark p-4">
        <ButtonsForAdmin id={surveys.id}/>
        <FormGroupTitleCategory surveys={surveys} edit={edit}/>
        {surveys.questions?.map((question, index) =>
          question.response.length > 1 ? (
            <FormGroupMultipleChoice key={index} question={question} edit={edit} initialValues={initialValues}/>
          ) : question.response.length == 1 ? (
            <FormGroupQuestionWithImage key={index} question={question} edit={edit} initialValues={initialValues}/>
          ) : (
            <FormGroupSimpleQuestion key={index} question={question} edit={edit} initialValues={initialValues}/>
          )
        )} 
        </div>
      </Row>
    </Container>
    </>
  );
};

export default FormSurveyDetail;
