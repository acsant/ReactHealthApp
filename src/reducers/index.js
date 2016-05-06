import { combineReducers } from 'redux';
import login from './login';

const HealthApp = combineReducers(
	login
)

export default HealthApp