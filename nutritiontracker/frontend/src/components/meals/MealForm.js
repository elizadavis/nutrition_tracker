import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMeal } from '../../actions/meals';

export const MealForm = (props) => {
  const { amount, food } = props

  return (
  // <div className="card card-body mt-4 mb-4">
  <div>
  <form onSubmit={this.handleSubmit}>
    <div className="form-group">
      <label>Name</label>
      <input
        className="form-control hidden"
        type="text"
        name="name"
        // onChange={this.handleChange}
        value={food.name}
      />
    </div>
    <div className="form-group">
      <label>Servings</label>
      <input
        className="form-control hidden"
        type="number"
        step=".01"
        name="servings"
        // onChange={this.handleChange}
        value={amount}
      />
    </div>
    <div className="form-group">
      <label>Calories</label>
      <input
        className="form-control"
        type="number"
        name="calories"
        // onChange={this.handleChange}
        value={amount * food.calories}
      />
    </div>
    <div className="form-group">
      <label>Fat</label>
      <input
        className="form-control"
        type="number"
        name="fat"
        // onChange={this.handleChange}
        value={amount * food.fat}
      />
    </div>
    <div className="form-group">
      <label>Protein</label>
      <input
        className="form-control"
        type="number"
        name="protein"
        // onChange={this.handleChange}
        value={amount * food.protein}
      />
    </div>
    <div className="form-group">
      <label>Total Carbs</label>
      <input
        className="form-control"
        type="number"
        name="total_carbs"
        // onChange={this.handleChange}
        value={amount * food.total_carbs}
      />
    </div>
    <div className="form-group">
      <label>Fiber</label>
      <input
        className="form-control"
        type="number"
        name="fiber"
        // onChange={this.handleChange}
        value={amount * food.fiber}
      />
    </div>
    <div className="form-group">
      <label>Total Sugar</label>
      <input
        className="form-control"
        type="number"
        name="total_sugar"
        // onChange={this.handleChange}
        value={amount * food.total_sugar}
      />
    </div>
    <div className="form-group">
      <label>Added Sugar</label>
      <input
        className="form-control"
        type="number"
        name="added_sugar"
        // onChange={this.handleChange}
        value={amount * food.added_sugar}
      />
    </div>
    <div className="form-group">
      <label>Sodium</label>
      <input
        className="form-control"
        type="number"
        name="sodium"
        // onChange={this.handleChange}
        value={amount * food.sodium}
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  </form>
</div>
  )

}