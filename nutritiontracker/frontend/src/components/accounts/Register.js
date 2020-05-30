import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export const Register = props => {
  // state = {
  //   username: '',
  //   email: '',
  //   password: '',
  //   password2: ''
  // };
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    createMessage: PropTypes.func.isRequired
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { password, password2, username, email } = this.state;
  //   if (password !== password2) {
  //     this.props.createMessage({ passwordMismatch: 'Passwords Do Not Match'})
  //   }
  //   else {
  //     const newUser = {
  //       username,
  //       password,
  //       email
  //     }
  //     this.props.register(newUser);
  //   }
  // }

  const submit = e => {
    e.preventDefault();
    if (password !== password2) {
      props.createMessage({ passwordMismatch: 'Passwords Do Not Match'})
    }
    else {
      const newUser = {
        username,
        password,
        email
      }
      props.register(newUser);
    }
  }

  const whichReturn = () => {
    if (props.isAuthenticated) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={submit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={e => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={e => setPassword2(e.target.value)}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
      )
    }
  }
  return (
    whichReturn()
  )
  
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated 
});

export default connect(mapStateToProps, { register, createMessage })(Register);

