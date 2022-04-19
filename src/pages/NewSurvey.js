import { useContext } from "react";
import { Container } from "react-bootstrap";
import FormSurvey from "../components/Admin/FormSurvey/FormSurvey";
import Navegation from "../components/Admin/Navegation/Navegation";
import { UserContext } from "../context/UserContext";

const NewSurvey = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      {
        user.role === 'ADMIN' ? <Navegation /> : null
      }
      <Container className="d-flex flex-column w-50 p-4">
        <FormSurvey />
      </Container>
    </>
  );
};

export default NewSurvey;
