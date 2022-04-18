import { ADD_SURVEYS, DELETE_SURVEYS, GET_SURVEY, GET_SURVEYS, UPDATE_SURVEYS } from "../../types"


export default (state, action) =>{
  switch(action.type){
    case GET_SURVEYS:
      return{
        ...state,
        surveys: action.payload
      }
    case ADD_SURVEYS:
      return{
        ...state,
        surveys: state.surveys.push(action.payload)
      }
    case DELETE_SURVEYS:
      return{
        ...state,
        surveys: state.surveys.filter(survey => survey.id != action.payload)
      }
    case UPDATE_SURVEYS:

      return{
        ...state,
        surveys: [...state.surveys.filter(survey => survey.id != action.payload.id),action.payload]
      }
    case GET_SURVEY:
      console.log(action.payload);
      return{
        ...state,
        surveySelected: action.payload
      }
  }
}