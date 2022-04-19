import { useNavigate } from "react-router-dom";
import "./EncuestasCategoria.css";

const EncuestasCategoria = ({filterSurvey}) => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/surveydetail/${filterSurvey._id}`);
  }

  return (
   
    <div className="d-flex justify-content-center border px-5 py-2 m-2 polls" onClick={handleClick}>{filterSurvey.name}</div>
   
  );
};

export default EncuestasCategoria;
