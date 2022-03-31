import { GET_SURVEYS } from "../../types"


export default (state,action) =>{
  switch(action.type){
    case GET_SURVEYS:
      return{
        ...state,
        surveys: action.payload
      }
  }
}