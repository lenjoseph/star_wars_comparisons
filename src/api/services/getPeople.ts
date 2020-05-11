import axios from 'axios';
import { People } from '../../types';

export const getPeople = (
	currentURL: string,
	people: People,
	resolve: Function,
	reject: Function
) => {
	axios
		.get(currentURL.replace(/^http:\/\//i, 'https://'))
		.then((res) => {
			const newPeople = people.concat(res.data.results);
			// if data.next is in object, rerun with new URL, else resolve the promise with concatenated data
			res.data.next === null
				? resolve(newPeople)
				: getPeople(res.data.next, newPeople, resolve, reject);
		})
		.catch((err) => {
			console.log(JSON.stringify({ error: err }));
			reject('Something bad happened. Please refresh the page.');
		});
};
