import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
	user: UserReducer
});

export default AllReducers;