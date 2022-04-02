import ContainerCards from "../components/Admin/ContainerCards/ContainerCards";
import Navegation from "../components/Admin/Navegation/Navegation";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const PublishedSurveys = () => {
    
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
 
export default PublishedSurveys;