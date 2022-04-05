import { GET_CATEGORIES } from "../../types";

export default (state, action)=>{
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
    }
}