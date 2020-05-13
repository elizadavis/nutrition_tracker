import axios from 'axios';
import { GET_FOODS, DELETE_FOOD, ADD_FOOD } from './types';

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
      dispatch({
        type: ADD_FOOD,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
}


