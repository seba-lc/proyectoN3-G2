import { useContext } from "react";
import FormSurveyDetail from "../components/Admin/FormSurveyDetail/FormSurveyDetail";
import Navegation from "../components/Admin/Navegation/Navegation";
import SurveyShowed from "../components/SurveyShowed/SurveyShowed";
import { UserContext } from "../context/UserContext";

const SurveyDetail = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <SurveyShowed />
    </>
  );
};

export default SurveyDetail;
