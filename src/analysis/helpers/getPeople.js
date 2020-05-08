import axios from "axios";

export const getPeople = (currentURL, people, resolve, reject) => {
	axios
		.get(currentURL)
		.then((res) => {
			const newPeople = people.concat(res.data.results);
			// if data.next is in object, rerun with new URL, else resolve the promise with concatenated data
			res.data.next === null
				? resolve(newPeople)
				: getPeople(res.data.next, newPeople, resolve, reject);
		})
		.catch((err) => {
			console.log(`error: ${err}`);
			reject("Something bad happened. Please refresh the page.");
		});
};
