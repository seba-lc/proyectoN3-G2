import { useContext } from "react";
import { Button } from "react-bootstrap";
import SurveysContext from "../../../context/surveys/SurveysContext";

const ButtonsForADmin = ({id}) => {
    const { deleteSurveys } = useContext(SurveysContext)

    return ( 
        <div>
            <Button onClick={()=>deleteSurveys(id)}>E</Button>
            <Button>M</Button>
            <Button>A</Button>
        </div>
     );
}
 
export default ButtonsForADmin;