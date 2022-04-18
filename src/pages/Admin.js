import { Container} from "react-bootstrap";
import Navegation from "../components/Admin/Navegation/Navegation";
import ContainerCards from "../components/Admin/ContainerCards/ContainerCards";
import { URL_SURVEYS } from "../constants";
import useForm from "../hooks/useForm";

const Admin = () => {
  const {admin} = useForm()
  return (
    <>
      {admin?(<Navegation/>):(null)}
      <Container>
            <ContainerCards location={URL_SURVEYS}></ContainerCards>
      </Container>
    </>
  );
};

export default Admin;