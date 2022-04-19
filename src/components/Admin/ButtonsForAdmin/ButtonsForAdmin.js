import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import SurveysContext from "../../../context/surveys/SurveysContext";

const ButtonsForAdmin = ({ surveySelected, values }) => {
  const { deleteSurveys, updateSurveys } = useContext(SurveysContext);
  const navigate = useNavigate();
  const location = useLocation();

  const publicado = (p)=> {
    if(p){
      return {state: false}
    } else {
      return {state: true}
    }
  }

  return location.pathname == "/surveydetail/:id" ? (
    <div className="d-flex justify-content-end">
      <Button
        className="m-1"
        variant="danger"
        onClick={() => deleteSurveys(surveySelected.id)}
      >
        Eliminar
      </Button>
      <Button
        className="m-1"
        variant="primary"
        onClick={() => updateSurveys(surveySelected.id, values)}
      >
        Modificar
      </Button>
      <Button
        className={
          surveySelected.state
            ? "me-2 spanSurvaysCardsTrue btnStateTrue p-1"
            : "me-2 spanSurvaysCardsFalse btnStateFalse p-1"
        }
        onClick={() =>
          updateSurveys(surveySelected.id, publicado(surveySelected.state))
        }
      >
        {surveySelected.state ? "Publicado" : " -Publicar-"}
      </Button>
    </div>
  ) : (
    <div className="text-center">
      <div className="d-flex justify-content-end">
        <Button
          className="m-1"
          variant="danger"
          onClick={() => deleteSurveys(surveySelected.id)}
        >
          E
        </Button>
        <Button
          className="m-1"
          variant="primary"
          onClick={() => navigate(`/surveydetail/${surveySelected.id}`)}
        >
          M
        </Button>
        <Button
        className="m-1"
          variant={
            surveySelected.state?(
              "warning"
            ) : (
              "secondary"
            )}
          onClick={() =>
            updateSurveys(surveySelected.id, publicado(surveySelected.state))
          }
        >
          P
        </Button>
      </div>
    </div>
  );
};

export default ButtonsForAdmin;
