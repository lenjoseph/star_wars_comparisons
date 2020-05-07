import { getHomeworlds } from './getHomeworld.js';
import { getVehicles } from './getVehicles.js';
import { getStarships } from './getStarships.js';
import axios from 'axios';

export const comparePeople = async (p1, p2, people) => {
	// get objects associated with names
	const personArray = [];
	personArray.push(
		people.find((person) => {
			return person.name === p1;
		})
	);
	personArray.push(
		people.find((person) => {
			return person.name === p2;
		})
	);

	// determine overlap in films
	const commonFilms = [];
	if (personArray[0].films.length && personArray[1].films.length) {
		if (personArray[0].length < personArray[1].length) {
			personArray[0].films.forEach((film) => {
				if (personArray[1].films.includes(film)) {
					commonFilms.push(film);
				}
			});
		} else {
			personArray[1].films.forEach((film) => {
				if (personArray[0].films.includes(film)) {
					commonFilms.push(film);
				}
			});
		}
	}

	//    break analysis if characters were never in the same film
	if (!commonFilms.length) {
		return `${p1} and ${p2} were never in the same film.`;
	}

	const [
		homeworldResults,
		vehicleResults,
		starshipResults,
	] = await Promise.all([
		getHomeworlds(p1, p2, personArray, commonFilms),
		getVehicles(p1, p2, personArray, commonFilms),
		getStarships(p1, p2, personArray, commonFilms),
	]);

	console.log(homeworldResults, vehicleResults, starshipResults);
};
