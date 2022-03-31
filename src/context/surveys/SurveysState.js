import axios from "axios";
import { useReducer } from "react";
import { URL_SURVEYS } from "../../constants";
import { ERROR_SURVEYS, GET_SURVEYS } from "../../types";
import SurveysReducer from "./SurveysReducer";
import SurveysContext from "./SurveysContext";

const SurveysState = ({children}) => {

  const initialState = {
    surveys:[],
    surveysError:'',
  }

  const [state, dispatch] = useReducer(SurveysReducer, initialState);

  const getSurveys = async() =>{
    try {
      const response = await axios.get(URL_SURVEYS);
      dispatch({  //DISPATCH --> FUNCION PARA MODIFICAR EL ESTADO
        type:GET_SURVEYS, //--> EL TYPE LE DICE AL DISPATCH QUE TIPO DE CAMBIO HACER
        payload:response.data //-> EL PAYLOAD ES EL DATO QUE PASO PARA QUE SE CAMBIE EL ESTADO SI ES NECESARIO
      })
    } catch (error) {
      dispatch({
        type:ERROR_SURVEYS
      })
    }
  }

  return ( 
    <SurveysContext.Provider value={{
      surveys: state.surveys,
      surveysError: state.surveysError,
      getSurveys
    }} >
      {children}
    </SurveysContext.Provider>
   );
}
 
export default SurveysState;