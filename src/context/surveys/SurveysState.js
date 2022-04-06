import axios from "axios";
import { useReducer } from "react";
import { URL_SURVEYS, URL_SURVEYS_PENDIENTES, URL_SURVEYS_PUBLICADAS } from "../../constants";
import { ADD_SURVEYS, ERROR_SURVEYS, GET_SURVEYS } from "../../types";
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
      dispatch({
        type:GET_SURVEYS,
        payload:response.data
      })
    } catch (error) {
      dispatch({
        type:ERROR_SURVEYS
      })
    }
  }

  const addSurveys = async(data)=>{
    try {
      await axios.post(URL_SURVEYS, data)
      dispatch({
        type: ADD_SURVEYS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: ERROR_SURVEYS
      })
    }
  }

  return ( 
    <SurveysContext.Provider value={{
      surveys: state.surveys,
      surveysError: state.surveysError,
      getSurveys,
      addSurveys
    }} >
      {children}
    </SurveysContext.Provider>
   );
}
 
export default SurveysState;