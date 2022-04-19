import { useContext, useEffect } from "react";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col } from "react-bootstrap";
import SurveysCards from "../SurveysCards/SurveysCards";
import ButtonsForAdmin from "../ButtonsForAdmin/ButtonsForAdmin";
import useForm from "../../../hooks/useForm";
import './ContainerCards.css'
import { UserContext } from "../../../context/UserContext";

const ContainerCards = ({ type }) => {
  const { surveys, getPendingSurveys, getPublishedSurveys } = useContext(SurveysContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if(type === "pendingSurveys"){
      getPendingSurveys();
    }else if(type === "publishedSurveys"){
      getPublishedSurveys();
    }
  }, []);

  return (
    <Row className="admin-container pt-2">
      <h2 className="m-4 text-center admin-title">
        {
          type === "pendingSurveys" ? 'Encuestas Pendientes de Aprobación' : null
        }
        {
          type === "publishedSurveys" ? 'Encuestas Publicadas' : null
        }
      </h2>
      <h4 className="w-100 admin-title text-center">
      {
        surveys.length === 0 ? (type === "pendingSurveys" ? 'No hay encuestas pendientes de aprobación' : 'No hay encuestas publicadas al momento') : null
      }
      </h4>
      {
      surveys.length !== 0 ? (
      surveys.map((survey, index) => (
        <Col xs={12} md={6} lg={3} lg="3" key={index}>
          <SurveysCards 
            id={survey._id}
            name={survey.name}
            state={survey.state}
            category={survey.category}
            questions={survey.questions}
            date={survey.createdAt}
          />
          {/* {user.role === 'ADMIN' ? <ButtonsForAdmin surveySelected={survey} /> : null} */}
        </Col>
      ) 
      )): null
    }
    </Row>
  );
};

export default ContainerCards;
