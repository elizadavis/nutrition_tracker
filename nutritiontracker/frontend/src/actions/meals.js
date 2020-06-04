import axios from 'axios';
import { GET_MEALS, DELETE_MEAL, ADD_MEAL } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

// Get all meals
export const getMeals = () => (dispatch, getState) => {
  axios.get('/api/meals/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_MEALS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Delete a meal
export const deleteMeal = id => (dispatch, getState) => {
  axios.delete(`/api/meals/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteMeal: "Meal Removed"}));
      dispatch({
        type: DELETE_MEAL,
        payload: id
      });
    })
    .catch(err => console.error(err));
}

// Add a meal
export const addMeal = meal => (dispatch, getState) => {
  axios.post('/api/meals/', meal, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addMeal: "Meal Added"}));
      dispatch({
        type: ADD_MEAL,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}