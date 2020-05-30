import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFoods, deleteFood } from '../../actions/foods';
// import MealForm from '../meals/MealForm';

export const Foods = props => {
  Foods.propTypes = {
    foods: PropTypes.array.isRequired,
    getFoods: PropTypes.func.isRequired,
    deleteFood: PropTypes.func.isRequired
  }

  useEffect(() => {
    props.getFoods();
  }, [])
  
  return (
    <>
      <h2>Foods</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Serving Size</th>
            <th>Serving Unit</th>
            <th>Calories</th>
            <th>Fat (g)</th>
            <th>Protein (g)</th>
            <th>Total Carbs (g)</th>
            <th>Fiber (g)</th>
            <th>Total Sugar (g)</th>
            <th>Added Sugar (g)</th>
            <th>Sodium (mg)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { props.foods.map(food => (
            <tr key={food.id}>
              <td>{food.id}</td>
              <td>{food.name}</td>
              <td>{food.serving_size}</td>
              <td>{food.serving_unit}</td>
              <td>{food.calories}</td>
              <td>{food.fat}</td>
              <td>{food.protein}</td>
              <td>{food.total_carbs}</td>
              <td>{food.fiber}</td>
              <td>{food.total_sugar}</td>
              <td>{food.added_sugar}</td>
              <td>{food.sodium}</td>
              <td><button onClick={() => props.deleteFood(food.id)}
                className="btn btn-danger btn-sm">Delete</button></td>
              {/* <td><MealForm amount={1} food={food} /></td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = state => ({
  foods: state.foods.foods
});

export default connect(mapStateToProps, { getFoods, deleteFood })(Foods);
