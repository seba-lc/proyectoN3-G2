import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL_SURVEYS } from "../../../constants";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col, Container } from "react-bootstrap";
import FormGroupSimpleQuestion from "../FormGroupSimpleQuestion/FormGroupSimpleQuestion";
import FormGroupMultipleChoice from "../FormGroupMultipleChoice/FormGroupMultipleChoice";
import FormGroupQuestionWithImage from "../FormGroupQuestionWithImage/FormGroupQuestionWithImage";

const FormSurveyDetail = () => {
  const { surveys, getSurveys } = useContext(SurveysContext);
  const params = useParams();

  useEffect(() => {
    getSurveys(URL_SURVEYS + params.id);
  }, []);

  //console.log(surveys.questions);
  //console.log(Object.values(surveys));
  /* setTimeout(()=>{
        let arr = Object.values(surveys)
        console.log(arr);
    },1000)  */

  console.log(surveys.questions);
  return (
    <>
    <Container className="p-5">
      <Row>
        <h3>{surveys.name}</h3>
        <h5>{surveys.category}</h5>    
        {surveys.questions.map((question, index) =>
          question.response.length > 1 ? (
            <FormGroupMultipleChoice key={index} question={question} />
          ) : question.response.length == 1 ? (
            <FormGroupQuestionWithImage key={index} question={question} />
          ) : (
            <FormGroupSimpleQuestion key={index} question={question} />
          )
        )}
      </Row>
    </Container>
    </>
  );
};

export default FormSurveyDetail;
