import axios from "axios";
import { useReducer } from "react";
import axiosClient from "../../config/axiosClient";
import { URL_CATEGORIES } from "../../constants";
import { ERROR_CATEGORIES, GET_CATEGORIES } from "../../types";
import CategoriesContext from "./CategoriesContext";
import CategoriesReducer from "./CategoriesReducer";

const CategoriesState = ({children}) => {
    const initialState = {
        categories: [],
        categoriesError: ''
    }
    const [state, dispatch] = useReducer(CategoriesReducer, initialState)

    const getCategories = async ()=>{
        try {
            const response = await axios.get(URL_CATEGORIES);
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: ERROR_CATEGORIES
            })
        }
    }
    return (
        <CategoriesContext.Provider value={{
            categories: state.categories,
            categoriesError: state.categoriesError,
            getCategories
        }}>
            {children}
        </CategoriesContext.Provider>

     );
}
 
export default CategoriesState;