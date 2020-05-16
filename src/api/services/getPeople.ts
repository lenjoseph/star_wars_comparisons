import { People } from '../../types';
import { convertToHTTPS } from '../helpers/safeURL';

export const getPeople = (
	currentURL: string,
	people: People,
	resolve: Function,
	reject: Function
) => {
	fetch(convertToHTTPS(currentURL))
		.then(async (res) => {
			const data = await res.json();
			const newPeople = people.concat(data.results);
			// if data.next is in object, rerun with new URL, else resolve the promise with concatenated data
			data.next === null
				? resolve(newPeople)
				: getPeople(data.next, newPeople, resolve, reject);
		})
		.catch((err) => {
			console.log(JSON.stringify({ error: err }));
			reject('Something bad happened. Please refresh the page.');
		});
};
