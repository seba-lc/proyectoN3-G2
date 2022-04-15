import { useContext, useEffect } from "react";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col } from "react-bootstrap";
import SurveysCards from "../SurveysCards/SurveysCards";
import ButtonsForAdmin from "../ButtonsForAdmin/ButtonsForAdmin";
import useForm from "../../../hooks/useForm";

const ContainerCards = ({ location }) => {
  const { surveys, getSurveys } = useContext(SurveysContext);
  const { admin } = useForm();
  useEffect(() => {
    getSurveys(location);
  }, []);

  return (
    <Row className="pt-5">
      {surveys?.map((survey, index) => (
        <Col lg="3" key={index}>
          <SurveysCards
            id={survey.id}
            name={survey.name}
            state={survey.state}
            category={survey.category}
            questions={survey.questions}
          />
          {admin ? <ButtonsForAdmin id={survey.id} /> : null}
        </Col>
      ))}
    </Row>
  );
};

export default ContainerCards;
