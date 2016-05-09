import { combineReducers } from 'redux';
import login from './login';
import loginFailed from './loginfail';
import validate from './validate';

const HealthApp = combineReducers(
	login,
	loginFailed,
	validate
)

export default HealthApp