import { Container, Col, Row } from "react-bootstrap";
import useGet from "../hooks/useGet";
import Navegation from "../components/Admin/Navegation/Navegation";
import SurveysCards from "../components/Admin/SurveysCards/SurveysCards";
import { URL_SURVEYS } from "../constants";

const AllSurveys = () => {

    const surveys = useGet(URL_SURVEYS)
console.log(surveys);
    return ( 
        <>
        <Navegation></Navegation>
        <Container>
            <Row>   
                {surveys.map((survey,index) =>(
                <Col key={index}>
                <SurveysCards 
                    id={survey.id}
                    name={survey.name}
                    state={survey.state}
                    category={survey.category}
                />
                </Col>
                ))}
            </Row>
            </Container>
        </>
        
                    
            );
        }
 
export default AllSurveys;