import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFood } from '../../actions/foods';

export class Form extends Component {
  state = {
    name: '',
    serving_size: 0,
    serving_unit: '',
    calories: 0,
    fat: 0,
    protein: 0,
    total_carbs: 0,
    fiber: 0,
    total_sugar: 0,
    added_sugar: 0,
    sodium: 0
  }

  static propTypes = {
    addFood: PropTypes.func.isRequired
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      serving_size,
      serving_unit,
      calories,
      fat,
      protein,
      total_carbs,
      fiber,
      total_sugar,
      added_sugar,
      sodium
    } = this.state;
    const food = {
      name,
      serving_size,
      serving_unit,
      calories,
      fat,
      protein,
      total_carbs,
      fiber,
      total_sugar,
      added_sugar,
      sodium
    };
    this.props.addFood(food);
    this.setState({
      name: '',
      serving_size: 0,
      serving_unit: '',
      calories: 0,
      fat: 0,
      protein: 0,
      total_carbs: 0,
      fiber: 0,
      total_sugar: 0,
      added_sugar: 0,
      sodium: 0
    })
  }

  render() {
    const {
      name,
      serving_size,
      serving_unit,
      calories,
      fat,
      protein,
      total_carbs,
      fiber,
      total_sugar,
      added_sugar,
      sodium
    } = this.state

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Food</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Serving Size</label>
            <input
              className="form-control"
              type="number"
              step=".01"
              name="serving_size"
              onChange={this.handleChange}
              value={serving_size}
            />
          </div>
          <div className="form-group">
            <label>Serving Unit</label>
            <input
              className="form-control"
              type="text"
              name="serving_unit"
              onChange={this.handleChange}
              value={serving_unit}
            />
          </div>
          <div className="form-group">
            <label>Calories</label>
            <input
              className="form-control"
              type="number"
              name="calories"
              onChange={this.handleChange}
              value={calories}
            />
          </div>
          <div className="form-group">
            <label>Fat</label>
            <input
              className="form-control"
              type="number"
              name="fat"
              onChange={this.handleChange}
              value={fat}
            />
          </div>
          <div className="form-group">
            <label>Protein</label>
            <input
              className="form-control"
              type="number"
              name="protein"
              onChange={this.handleChange}
              value={protein}
            />
          </div>
          <div className="form-group">
            <label>Total Carbs</label>
            <input
              className="form-control"
              type="number"
              name="total_carbs"
              onChange={this.handleChange}
              value={total_carbs}
            />
          </div>
          <div className="form-group">
            <label>Fiber</label>
            <input
              className="form-control"
              type="number"
              name="fiber"
              onChange={this.handleChange}
              value={fiber}
            />
          </div>
          <div className="form-group">
            <label>Total Sugar</label>
            <input
              className="form-control"
              type="number"
              name="total_sugar"
              onChange={this.handleChange}
              value={total_sugar}
            />
          </div>
          <div className="form-group">
            <label>Added Sugar</label>
            <input
              className="form-control"
              type="number"
              name="added_sugar"
              onChange={this.handleChange}
              value={added_sugar}
            />
          </div>
          <div className="form-group">
            <label>Sodium</label>
            <input
              className="form-control"
              type="number"
              name="sodium"
              onChange={this.handleChange}
              value={sodium}
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
}

export default connect(null, { addFood })(Form);
