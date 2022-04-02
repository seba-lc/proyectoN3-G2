import { useContext, useEffect } from "react";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col } from "react-bootstrap";
import SurveysCards from "../SurveysCards/SurveysCards";

const ContainerCards = ({location}) => {

    const{surveys, getSurveys} = useContext(SurveysContext)
    useEffect(()=>{
        getSurveys(location.pathname)
    },[])
    console.log(typeof location.pathname);
    //const surveys = urlOptions(location.pathname);
    
    return ( 
            <Row>   
                {surveys.map((survey,index) =>(
                <Col lg="3" key={index}>
                <SurveysCards 
                    id={survey.id}
                    name={survey.name}
                    state={survey.state}
                    category={survey.category}
                />
                </Col>
                ))}
            </Row>
     );
}
 
export default ContainerCards;