import { setPeople } from './setPeople';
import { setLoading } from './setLoading';
import { setPersonOne } from './setPersonOne';
import { setPersonTwo } from './setPersonTwo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	people: setPeople,
	loading: setLoading,
	personOne: setPersonOne,
	personTwo: setPersonTwo,
});

export default rootReducer;
