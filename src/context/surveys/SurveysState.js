import axios from "axios";
import { useReducer } from "react";
import { URL_SURVEYS, URL_SURVEYS_PENDIENTES, URL_SURVEYS_PUBLICADAS } from "../../constants";
import { ERROR_SURVEYS, GET_SURVEYS } from "../../types";
import SurveysReducer from "./SurveysReducer";
import SurveysContext from "./SurveysContext";

const SurveysState = ({children}) => {

  const initialState = {
    surveys:[],
    surveysError:'',
  }

  const [state, dispatch] = useReducer(SurveysReducer, initialState);

  const getSurveys = async(location) =>{
    let url = URL_SURVEYS
      if(location =='/admin')
        url = URL_SURVEYS
      else if(location=='/pendingsurveys')
        url = URL_SURVEYS_PENDIENTES
      else if(location=='/publishedsurveys')
        url = URL_SURVEYS_PUBLICADAS
      
    try {
      const response = await axios.get(url);
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

 /*  const urlOptions = (location)=>{
    if(location =='/admin'){
      return URL_SURVEYS
    }else if(location=='/pendingsurveys'){
      return URL_SURVEYS_PENDIENTES
    }else{
      return URL_SURVEYS_PUBLICADAS
    }
  } */

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