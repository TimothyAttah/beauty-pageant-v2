import { combineReducers } from 'redux';
import auth from './authReducer';
import constestants from './contestantReducer';

export const reducers = combineReducers({
  auth,
  constestants,
});
