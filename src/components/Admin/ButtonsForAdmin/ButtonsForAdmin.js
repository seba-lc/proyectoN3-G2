import { useContext } from "react";
import { Button } from "react-bootstrap";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { UserContext } from "../../../context/UserContext";

const ButtonsForAdmin = ({ id }) => {
  const { deleteSurveys } = useContext(SurveysContext);
  const {user} = useContext(UserContext)

  return user.role === 'ADMIN' ? (
    <div className="d-flex justify-content-end">
      <Button
        className="m-1"
        id="btnDelete"
        variant="danger"
        onClick={() => deleteSurveys(id)}
      >
        E
      </Button>
    </div>
  ) : (null);
};

export default ButtonsForAdmin;
