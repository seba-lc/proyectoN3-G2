import { useLocation } from "react-router-dom";
import { Container} from "react-bootstrap";
import Navegation from "../components/Admin/Navegation/Navegation";
import ContainerCards from "../components/Admin/ContainerCards/ContainerCards";

const Admin = () => {
  
  const location = useLocation();
  return (
    <>
      <Navegation></Navegation>
      <Container>
            <h2 className="mt-3 text-center">Todas las Encuestas</h2>
            <ContainerCards location={location}></ContainerCards>
      </Container>
    </>
  );
};

export default Admin;