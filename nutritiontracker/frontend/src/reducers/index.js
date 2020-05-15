import { combineReducers } from 'redux';
import foods from './foods';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  foods,
  errors,
  messages,
  auth
});