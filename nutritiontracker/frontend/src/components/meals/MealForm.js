import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMeal } from '../../actions/meals';

export const MealForm = (props) => {
  
  const { food } = props;

  const [servings, setServings] = useState(1);

  const [name] = useState(food.name);
  const [calories, setCalories] = useState(food.calories);
  const [fat, setFat] = useState(food.fat);
  const [protein, setProtein] = useState(food.protein);
  const [total_carbs, setTotalCarbs] = useState(food.total_carbs);
  const [fiber, setFiber] = useState(food.fiber);
  const [total_sugar, setTotalSugar] = useState(food.total_sugar);
  const [added_sugar, setAddedSugar] = useState(food.added_sugar);
  const [sodium, setSodium] = useState(food.sodium);

  MealForm.propTypes = {
    addMeal: PropTypes.func.isRequired
  };

  useEffect(() => {
    setCalories(servings * food.calories);
    setFat(servings * food.fat);
    setProtein(servings * food.protein);
    setTotalCarbs(servings * food.total_carbs);
    setFiber(servings * food.fiber);
    setTotalSugar(servings * food.total_sugar);
    setAddedSugar(servings * food.added_sugar);
    setSodium(servings * food.sodium);
  }, [servings])

  const handleSubmit = e => {
    e.preventDefault();
    const meal = {
      name,
      servings,
      calories,
      fat,
      protein,
      total_carbs,
      fiber,
      total_sugar,
      added_sugar,
      sodium
    };
    props.addMeal(meal);
    setServings(1);
  }

  return (
  <div>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input
        className="form-control"
        type="number"
        step=".01"
        name="servings"
        onChange={e => setServings(e.target.value)}
        value={servings}
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary btn-sm">
        Track
      </button>
    </div>
  </form>
</div>
  )
}

export default connect(null, {addMeal})(MealForm);
