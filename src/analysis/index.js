import { getHomeworlds } from "./helpers/getHomeworld.js";
import { getVehicles } from "./helpers/getVehicles.js";
import { getStarships } from "./helpers/getStarships.js";
import axios from "axios";

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
		return [`${p1} and ${p2} were never in the same film.`];
	}

	// get names of shared films
	const commonFilmNames = await Promise.all(
		commonFilms.map((url) =>
			axios.get(url).then((res) => {
				return res.data.title;
			})
		)
	).catch((err) => {
		return JSON.stringify({ error: err });
	});

	// perform analysis on each category for two people
	const [
		homeworldResults,
		vehicleResults,
		starshipResults,
	] = await Promise.all([
		getHomeworlds(p1, p2, personArray, commonFilmNames),
		getVehicles(p1, p2, personArray, commonFilmNames),
		getStarships(p1, p2, personArray, commonFilmNames),
	]).catch((err) => {
		return JSON.stringify({ error: err });
	});

	const commonFilmResults = [];

	// if there are no common vehicles, starships, or homelands, but there are common films, list the films
	if (
		!homeworldResults.length &&
		!vehicleResults.length &&
		!starshipResults.length
	) {
		let commonFilmNameLength = commonFilmNames.length;
		commonFilmResults.push(
			`${p1} and ${p2} were never seen together on a planet, vehicle, or starship, but were both in ${commonFilmNames.map(
				(name, i) => {
					return commonFilmNameLength === i + 1
						? ` and ${name}`
						: ` ${name}`;
				}
			)}`
		);
	}

	// return resolved promises to caller
	return [
		homeworldResults,
		vehicleResults,
		starshipResults,
		commonFilmResults,
	];
};
