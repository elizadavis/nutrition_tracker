import { GET_FOODS, DELETE_FOOD, ADD_FOOD } from '../actions/types.js';

const initialState = {
  foods: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_FOODS:
      return {
        ...state,
        foods: action.payload
      };
    case DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter(food => food.id !== action.payload)
      };
    case ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.payload]
      }
    default:
      return state;
  }
}