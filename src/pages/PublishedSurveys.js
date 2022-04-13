import ContainerCards from "../components/Admin/ContainerCards/ContainerCards";
import Navegation from "../components/Admin/Navegation/Navegation";
import { Container } from "react-bootstrap";
import { URL_SURVEYS_PUBLICADAS } from "../constants";

const PublishedSurveys = () => {
    
    return ( 
        <>
        <Navegation></Navegation>
        <Container>
            <ContainerCards location={URL_SURVEYS_PUBLICADAS}></ContainerCards>
        </Container>
        </>
            );
}
 
export default PublishedSurveys;