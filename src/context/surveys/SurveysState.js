import axios from "axios";
import { useReducer } from "react";
import { URL_SURVEYS } from "../../constants";
import { ADD_SURVEYS, DELETE_SURVEYS, ERROR_SURVEYS, GET_SURVEYS, UPDATE_SURVEYS } from "../../types";
import SurveysReducer from "./SurveysReducer";
import SurveysContext from "./SurveysContext";

const SurveysState = ({children}) => {

  const initialState = {
    surveys:[],
    surveysError:'',
  }

  const [state, dispatch] = useReducer(SurveysReducer, initialState);

  const getSurveys = async(URL) =>{
    try {
      const response = await axios.get(URL);
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

  const deleteSurveys = async(id)=>{
    try {
      await axios.delete(URL_SURVEYS+id)
      dispatch({
        type: DELETE_SURVEYS,
        payload: id
      })
    } catch (error) {
      dispatch({
        type: ERROR_SURVEYS
      })
      
    }
  }

  const updateSurveys = async(id, data)=>{
    try {
      await axios.put(URL_SURVEYS+id)
      dispatch({
        type: UPDATE_SURVEYS,
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
      addSurveys,
      deleteSurveys,
      updateSurveys
    }} >
      {children}
    </SurveysContext.Provider>
   );
}
 
export default SurveysState;