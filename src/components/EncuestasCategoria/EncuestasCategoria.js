import "./EncuestasCategoria.css";

const EncuestasCategoria = ({filterSurvey}) => {
  return (
   
    <div className="d-flex justify-content-center border px-5 py-2 m-2 polls">{filterSurvey.surveyName}</div>
   
  );
};

export default EncuestasCategoria;
