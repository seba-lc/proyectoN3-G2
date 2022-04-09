import { useContext, useEffect } from "react";
import SurveysContext from "../../../context/surveys/SurveysContext";
import { Row, Col } from "react-bootstrap";
import SurveysCards from "../SurveysCards/SurveysCards";
import ButtonsForADmin from "../ButtonsForAdmin/ButtonsForAdmin";

const ContainerCards = ({location}) => {

    const{ surveys, getSurveys } = useContext(SurveysContext)
    
    useEffect(()=>{ 
        
        getSurveys(location)
        return()=>{
            console.log("desmontado");
        }
    },[])
console.log(surveys);
    return ( 
            <Row>   
                {surveys.map((survey,index) =>(
                <Col lg="3" key={index}>
                <SurveysCards 
                    id={survey.id}
                    name={survey.name}
                    state={survey.state}
                    category={survey.category}
                    questions={survey.questions}
                />
                <ButtonsForADmin id={survey.id}/>
                </Col>
                ))}
            </Row>
     );
}
 
export default ContainerCards;