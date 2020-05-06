import axios from 'axios';

export const getPeople = (currentURL, people, resolve, reject) => {
	axios
		.get(currentURL)
		.then((res) => {
			const newPeople = people.concat(res.data.results);
			res.data.next === null
				? resolve(newPeople)
				: getPeople(res.data.next, newPeople, resolve, reject);
		})
		.catch((err) => {
			console.log(err);
			reject('Something bad happened. Please refresh the page.');
		});
};
