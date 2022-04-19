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

  const getPendingSurveys = async() =>{
    try {
      const response = await axiosClient.get('/surveys');
      dispatch({
        type: GET_SURVEYS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type:ERROR_SURVEYS
      })
    }
  }

  const getSurveysByCategory = async (category) => {
    try {
      const response = await axiosClient.get(`/surveys/${category}`);
      dispatch({
        type: GET_SURVEYS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type:ERROR_SURVEYS
      })
    }
    }

  const getPublishedSurveys = async () =>{
    try {
      const response = await axiosClient.get('/surveys/published');
      if(response.data.length === 0){
        dispatch({
          type: GET_SURVEYS,
          payload: []
        })
      }else{
        dispatch({
          type: GET_SURVEYS,
          payload: response.data
        })
      }
    } catch (error) {
      dispatch({
        type:ERROR_SURVEYS
      })
    }
  }

  const getSurvey = async(id) =>{
    try {
      const response = await axiosClient.get(`/surveys/encuesta/${id}`);
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

  const addSurveys = async (data) => {
    try {
      const response = await axiosClient.post('/surveys', data)
      dispatch({
        type: ADD_SURVEYS,
        payload: [response.data]
      })
    } catch (error) {
      dispatch({
        type: ERROR_SURVEYS
      })
    }
  }

  const deleteSurveys = async(id)=>{
    try {
      await axiosClient.delete(`/surveys/encuesta/${id}`);
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

  const updateSurveys = async(id)=>{
    try {
      await axiosClient.put(`/surveys/${id}`);
      getPendingSurveys();
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
      getPendingSurveys,
      getPublishedSurveys,
      addSurveys,
      deleteSurveys,
      updateSurveys,
      getSurvey,
      surveySelected: state.surveySelected,
      getSurveysByCategory
    }} >
      {children}
    </SurveysContext.Provider>
   );
}
 
export default SurveysState;