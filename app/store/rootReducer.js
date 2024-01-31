import tripsReducer from './slices/trips';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  trips: tripsReducer,
});

export default rootReducer;