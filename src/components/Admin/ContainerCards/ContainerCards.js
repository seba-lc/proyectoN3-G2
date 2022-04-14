import { useContext, useEffect } from "react";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col } from "react-bootstrap";
import SurveysCards from "../SurveysCards/SurveysCards";
import ButtonsForAdmin from "../ButtonsForAdmin/ButtonsForAdmin";

const ContainerCards = ({ location }) => {
  const { surveys, getSurveys } = useContext(SurveysContext);

  useEffect(() => {
    getSurveys(location);
  }, []);
  console.log(surveys);
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
          <ButtonsForAdmin id={survey.id} />
        </Col>
      ))}
    </Row>
  );
};

export default ContainerCards;
