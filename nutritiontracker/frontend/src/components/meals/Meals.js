import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMeals, deleteMeal } from '../../actions/meals';

export const Meals = props => {
  Meals.propTypes = {
    meals: PropTypes.array.isRequired,
    getMeals: PropTypes.func.isRequired,
    deleteMeal: PropTypes.func.isRequired
  };

  useEffect(() => {
    props.getMeals();
  }, []);


  return (
    <>
      <h2>Meals</h2>
      <table className="table table-striped">
        <thead>
          <tr>
          <th>ID</th>
            <th>Name</th>
            <th>Servings</th>
            <th>Calories</th>
            <th>Fat (g)</th>
            <th>Protein (g)</th>
            <th>Total Carbs (g)</th>
            <th>Fiber (g)</th>
            <th>Total Sugar (g)</th>
            <th>Added Sugar (g)</th>
            <th>Sodium (mg)</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { props.meals.map(meal => (
            <tr key={meal.id}>
              <td>{meal.id}</td>
              <td>{meal.name}</td>
              <td>{meal.servings}</td>
              <td>{meal.calories}</td>
              <td>{meal.fat}</td>
              <td>{meal.protein}</td>
              <td>{meal.total_carbs}</td>
              <td>{meal.fiber}</td>
              <td>{meal.total_sugar}</td>
              <td>{meal.added_sugar}</td>
              <td>{meal.sodium}</td>
              <td>{meal.date_time}</td>
              <td><button onClick={() => props.deleteMeal(meal.id)}
                className="btn btn-danger btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = state => ({
  meals: state.meals.meals
});

export default connect(mapStateToProps, { getMeals, deleteMeal })(Meals);
