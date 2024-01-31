import tripsReducer from '../store/slices/tripsSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  trips: tripsReducer,
});

export default rootReducer;