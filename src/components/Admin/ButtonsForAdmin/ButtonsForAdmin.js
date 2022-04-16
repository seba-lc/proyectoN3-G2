import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import SurveysContext from "../../../context/surveys/SurveysContext";
import useForm from "../../../hooks/useForm";

const ButtonsForAdmin = ({ id }) => {
  const { deleteSurveys } = useContext(SurveysContext);
  const { edit, handleEdit } = useForm();

const navigate = useNavigate()
const location = useLocation()

console.log(location.pathname);

  return edit && location.pathname!="/admin"?(
    <div className="text-center">
    <h2>Editar Encuesta</h2>
    <div className="d-flex justify-content-end">
      <Button className="m-1" variant="danger" onClick={() => deleteSurveys(id)}>Eliminar</Button>
      <Button className="m-1" variant="primary" onClick={() => navigate(`/surveydetail/${id}`)}>Modificar</Button>
      <Button className="m-1" variant="secondary">Publicar</Button>
    </div>
    </div>
  ):(
    <div className="d-flex justify-content-end">
      <Button className="m-1" variant="danger" onClick={() => deleteSurveys(id)}>E</Button>
      <Button className="m-1" variant="primary" onClick={() => navigate(`/surveydetail/${id}`)}>M</Button>
      <Button className="m-1" variant="secondary">P</Button>
    </div>
  );
};

export default ButtonsForAdmin;
