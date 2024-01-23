import { combineReducers } from 'redux';
import auth from './authReducer';
import constestants from './contestantReducer';
import payment from './paymentReducer';

export const reducers = combineReducers({
  auth,
  constestants,
  payment,
});
