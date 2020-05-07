import { setPeople } from './analysis/setPeople';
import { setLoading } from './main/setLoading';
import { setPersonOne } from './analysis/setPersonOne';
import { setPersonTwo } from './analysis/setPersonTwo';
import { updateResults } from './results/setResults';
import { toggleResults } from './results/toggleResults';
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
