import axios from "axios";
import { useReducer } from "react";
import axiosClient from "../../config/axiosClient";
import { URL_CATEGORIES } from "../../constants";
import { ADD_CATEGORIES, DELETE_CATEGORIES, ERROR_CATEGORIES, GET_CATEGORIES } from "../../types";
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
            const response = await axiosClient.get('/category');
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

    const deleteCategories = async(id)=>{
        try {
          await axios.delete(URL_CATEGORIES+id)
          dispatch({
            type: DELETE_CATEGORIES,
            payload: id
          })
        } catch (error) {
          dispatch({
            type: ERROR_CATEGORIES
          })
          
        }
      }

      const addCategories = async(data)=>{
        try {
          await axios.post(URL_CATEGORIES, data)
          dispatch({
            type: ADD_CATEGORIES,
            payload: data
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