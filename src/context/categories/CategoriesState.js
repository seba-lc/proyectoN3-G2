import axios from "axios";
import { useReducer } from "react";
import axiosClient from "../../config/axiosClient";
import { URL_CATEGORIES } from "../../constants";
import { ADD_CATEGORIES, DELETE_CATEGORIES, ERROR_CATEGORIES, GET_CATEGORIES, GET_CATEGORY, UPDATE_CATEGORIES } from "../../types";
import CategoriesContext from "./CategoriesContext";
import CategoriesReducer from "./CategoriesReducer";

const CategoriesState = ({children}) => {
    const initialState = {
        categories: [],
        categorySelected: null,
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

    const getCategory = async ()=>{
      try {
          //const response = await axiosClient.get('/category');
          const response = await axios.get(URL_CATEGORIES);
          dispatch({
              type: GET_CATEGORY,
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
          await axiosClient.post('/category', data);
          getCategories()
        } catch (error) {
          dispatch({
            type: ERROR_CATEGORIES
          })
        }
      }

      const updateCategory = async (data)=>{
        try {
          await axiosClient.put(`/category/${data}`);
          getCategories();
        } catch (error) {
          dispatch({
            type: ERROR_CATEGORIES
          })
        }
      }

    return (
        <CategoriesContext.Provider value={{
            categories: state.categories,
            categorySelected: state.categorySelected,
            categoriesError: state.categoriesError,
            getCategories,
            addCategories,
            deleteCategories,
            updateCategory,
            getCategory
        }}>
            {children}
        </CategoriesContext.Provider>

     );
}
 
export default CategoriesState;