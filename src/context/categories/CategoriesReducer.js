import { ADD_CATEGORIES, DELETE_CATEGORIES, GET_CATEGORIES, UPDATE_CATEGORIES } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case ADD_CATEGORIES:
      return {
        ...state,
        categories: state.categories.push(action.payload)
      }
    case DELETE_CATEGORIES:
      return {
        ...state,
        categories: state.categories.filter((category) => category.id != action.payload),
      }
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories.filter((category) => category.id != action.payload.id ),action.payload]
      }
  }
};
