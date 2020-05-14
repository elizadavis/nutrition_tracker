import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }

  // tbd: add errors for all fields
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.serving_size) alert.error(`Name: ${error.msg.serving_size.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.deleteFood) alert.success(message.deleteFood);
      if (message.addFood) alert.success(message.addFood);
    }
  }

  render() {
    return <Fragment />
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
