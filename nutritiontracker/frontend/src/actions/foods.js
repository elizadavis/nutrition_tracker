import axios from 'axios';
import { GET_FOODS, DELETE_FOOD, ADD_FOOD, GET_ERRORS } from './types';
import { createMessage } from './messages';

// Get all foods
export const getFoods = () => dispatch => {
  axios.get('/api/foods/')
    .then(res => {
      dispatch({
        type: GET_FOODS,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
}

// Delete a food
export const deleteFood = (id) => dispatch => {
  axios.delete(`/api/foods/${id}/`)
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
export const addFood = (food) => dispatch => {
  axios.post('/api/foods/', food)
    .then(res => {
      dispatch(createMessage({ addFood: "Food Added"}));
      dispatch({
        type: ADD_FOOD,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      })
    });
}


