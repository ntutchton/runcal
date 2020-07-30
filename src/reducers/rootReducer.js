import { combineReducers } from 'redux';
import system from './systemReducer';
import plans from './planReducer';

export default combineReducers({
 system,
 plans
});