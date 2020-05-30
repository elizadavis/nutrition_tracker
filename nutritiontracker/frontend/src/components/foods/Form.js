import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFood } from '../../actions/foods';

// tbd: add min/max values, add units?
export const Form = props => {
  // state = {
  //   name: '',
  //   serving_size: 0,
  //   serving_unit: '',
  //   calories: 0,
  //   fat: 0,
  //   protein: 0,
  //   total_carbs: 0,
  //   fiber: 0,
  //   total_sugar: 0,
  //   added_sugar: 0,
  //   sodium: 0
  // }
  const [name, setName] = useState('');
  const [serving_size, setServingSize] = useState('');
  const [serving_unit, setServingUnit] = useState('');
  const [calories, setCalories] = useState('');
  const [fat, setFat] = useState('');
  const [protein, setProtein] = useState('');
  const [total_carbs, setTotalCarbs] = useState('');
  const [fiber, setFiber] = useState('');
  const [total_sugar, setTotalSugar] = useState('');
  const [added_sugar, setAddedSugar] = useState('');
  const [sodium, setSodium] = useState('');

   Form.propTypes = {
    addFood: PropTypes.func.isRequired
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const {
    //   name,
    //   serving_size,
    //   serving_unit,
    //   calories,
    //   fat,
    //   protein,
    //   total_carbs,
    //   fiber,
    //   total_sugar,
    //   added_sugar,
    //   sodium
    // } = state;
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
    props.addFood(food);
    setName('');
    setServingSize('');
    setServingUnit('');
    setCalories('');
    setFat('');
    setProtein('');
    setTotalCarbs('');
    setFiber('');
    setTotalSugar('');
    setAddedSugar('');
    setSodium('');
  }

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
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
            onChange={e => setServingSize(e.target.value)}
            value={serving_size}
          />
        </div>
        <div className="form-group">
          <label>Serving Unit</label>
          <input
            className="form-control"
            type="text"
            name="serving_unit"
            onChange={e => setServingUnit(e.target.value)}
            value={serving_unit}
          />
        </div>
        <div className="form-group">
          <label>Calories</label>
          <input
            className="form-control"
            type="number"
            name="calories"
            onChange={e => setCalories(e.target.value)}
            value={calories}
          />
        </div>
        <div className="form-group">
          <label>Fat</label>
          <input
            className="form-control"
            type="number"
            name="fat"
            onChange={e => setFat(e.target.value)}
            value={fat}
          />
        </div>
        <div className="form-group">
          <label>Protein</label>
          <input
            className="form-control"
            type="number"
            name="protein"
            onChange={e => setProtein(e.target.value)}
            value={protein}
          />
        </div>
        <div className="form-group">
          <label>Total Carbs</label>
          <input
            className="form-control"
            type="number"
            name="total_carbs"
            onChange={e => setTotalCarbs(e.target.value)}
            value={total_carbs}
          />
        </div>
        <div className="form-group">
          <label>Fiber</label>
          <input
            className="form-control"
            type="number"
            name="fiber"
            onChange={e => setFiber(e.target.value)}
            value={fiber}
          />
        </div>
        <div className="form-group">
          <label>Total Sugar</label>
          <input
            className="form-control"
            type="number"
            name="total_sugar"
            onChange={e => setTotalSugar(e.target.value)}
            value={total_sugar}
          />
        </div>
        <div className="form-group">
          <label>Added Sugar</label>
          <input
            className="form-control"
            type="number"
            name="added_sugar"
            onChange={e => setAddedSugar(e.target.value)}
            value={added_sugar}
          />
        </div>
        <div className="form-group">
          <label>Sodium</label>
          <input
            className="form-control"
            type="number"
            name="sodium"
            onChange={e => setSodium(e.target.value)}
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

export default connect(null, { addFood })(Form);
