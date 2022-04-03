import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Navegation from "../components/Admin/Navegation/Navegation";
import ContainerCards from "../components/Admin/ContainerCards/ContainerCards";

const PendingSurveys = () => {

    const location = useLocation();
    return ( 
        <>
        <Navegation></Navegation>
        <Container>
            <ContainerCards location={location}></ContainerCards>
        </Container>
        </>
            );
        }
 
export default PendingSurveys;