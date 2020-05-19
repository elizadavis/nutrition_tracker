import axios from 'axios';
import { GET_FOODS, DELETE_FOOD, ADD_FOOD } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

// Get all foods
export const getFoods = () => (dispatch, getState) => {
  axios.get('/api/foods/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_FOODS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Delete a food
export const deleteFood = id => (dispatch, getState) => {
  axios.delete(`/api/foods/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteFood: "Food Removed"}));
      dispatch({
        type: DELETE_FOOD,
        payload: id
      });
    })
    .catch(err => console.error(err));
}

// Add a food
export const addFood = food => (dispatch, getState) => {
  axios.post('/api/foods/', food, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addFood: "Food Added"}));
      dispatch({
        type: ADD_FOOD,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


