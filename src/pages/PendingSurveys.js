import { Container } from "react-bootstrap";
import Navegation from "../components/Admin/Navegation/Navegation";
import ContainerCards from "../components/Admin/ContainerCards/ContainerCards";
import { URL_SURVEYS_PENDIENTES } from "../constants";
import useForm from "../hooks/useForm";

const PendingSurveys = () => {
    const {admin} = useForm()
    return ( 
        <>
        {admin?(<Navegation/>):(null)}
        <Container>
            <ContainerCards location={URL_SURVEYS_PENDIENTES}></ContainerCards>
        </Container>
        </>
            );
        }
 
export default PendingSurveys;