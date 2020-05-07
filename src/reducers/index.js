import { setPeople } from './setPeople';
import { setLoading } from './setLoading';
import { setPersonOne } from './setPersonOne';
import { setPersonTwo } from './setPersonTwo';
import { updateResults } from './setResults';
import { toggleResults } from './toggleResults';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	people: setPeople,
	loading: setLoading,
	personOne: setPersonOne,
	personTwo: setPersonTwo,
	results: updateResults,
	showingResults: toggleResults,
});

export default rootReducer;
