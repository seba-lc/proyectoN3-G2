import { useContext, useEffect } from "react";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col } from "react-bootstrap";
import SurveysCards from "../SurveysCards/SurveysCards";
import ButtonsForAdmin from "../ButtonsForAdmin/ButtonsForAdmin";
import useForm from "../../../hooks/useForm";
import './ContainerCards.css'

const ContainerCards = ({ location }) => {
  const { surveys, getSurveys } = useContext(SurveysContext);
  const { admin } = useForm();
  useEffect(() => {
    getSurveys(location);
  }, []);

  return (
    <Row className="pt-2">
      <h2 className="m-4 text-center titleColor">Todas las Encuestas</h2>
      {surveys?.map((survey, index) => (
        <Col lg="3" key={index}>
          <SurveysCards
            id={survey.id}
            name={survey.name}
            state={survey.state}
            category={survey.category}
            questions={survey.questions}
          />
          {admin ? <ButtonsForAdmin surveySelected={survey} /> : null}
        </Col>
      ))}
    </Row>
  );
};

export default ContainerCards;
