import axios from "axios";
import { useReducer } from "react";
import { URL_SURVEYS } from "../../constants";
import { ADD_SURVEYS, DELETE_SURVEYS, ERROR_SURVEYS, GET_SURVEY, GET_SURVEYS, UPDATE_SURVEYS } from "../../types";
import SurveysReducer from "./SurveysReducer";
import SurveysContext from "./SurveysContext";
import axiosClient from "../../config/axiosClient";

const SurveysState = ({children}) => {

  const initialState = {
    surveys:[],
    surveySelected:{},
    surveysError:'',
  }

  const [state, dispatch] = useReducer(SurveysReducer, initialState);

  const getSurveys = async(URL) =>{
    try {
      //const response = await axiosClient.get(`/surveys/${category}`);
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

  const getSurvey = async(URL) =>{
    try {
      //const response = await axiosClient.get(`/surveys/${category}`);
      const response = await axios.get(URL);
      dispatch({
        type:GET_SURVEY,
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
      await axios.put(URL_SURVEYS+id, data)
      dispatch({
        type: UPDATE_SURVEYS,
        payload: id
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
      updateSurveys,
      getSurvey,
      surveySelected: state.surveySelected
    }} >
      {children}
    </SurveysContext.Provider>
   );
}
 
export default SurveysState;