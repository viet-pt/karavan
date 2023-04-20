import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { progressReducer } from './progressReducer';

export const rootReducer = combineReducers({
  userReducer,
  progressReducer,
});
