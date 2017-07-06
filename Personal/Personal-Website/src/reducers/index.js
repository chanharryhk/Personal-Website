import {combineReducers} from 'redux'
import ActiveAttributes from './activeAttributes';

const allReducers = combineReducers({
  attributes: ActiveAttributes,
});

export default allReducers;
