import axios from "axios";
import { doesWordStartWithVowel } from "./vowelCheck";

export const getVehicles = async (p1, p2, personArray, commonFilmNames) => {
	let commonVehicles = personArray[0].vehicles.filter((vehicle) =>
		personArray[1].vehicles.includes(vehicle)
	);
	if (commonVehicles.length) {
		// resolve each vehicle url and nested film using async map
		const vehicleObjs = await Promise.all(
			commonVehicles.map((url) =>
				axios
					.get(url)
					// res is a vehicle object
					.then(async (res) => {
						// resolving film objects for film url in each vehicle
						const films = await Promise.all(
							res.data.films.map(async (url) =>
								axios
									.get(url)
									.then((res) => {
										// return just title of film
										return res.data.title;
									})
									.catch((err) => {
										console.log(
											JSON.stringify({ error: err })
										);
									})
							)
						);
						// return final mapped shape to the array
						return {
							name: res.data.name,
							films: films,
						};
					})
			)
		).catch((err) => {
			console.log(JSON.stringify({ error: err }));
		});

		// filter the vehicle array for any vehicle films that were not included in the common films
		const filteredVehicles = vehicleObjs.map((veh) => {
			let films = veh.films.filter((film) =>
				commonFilmNames.includes(film)
			);
			return {
				name: veh.name,
				films: films,
			};
		});

		const finalResults = [];

		// hydrate final results array before returning to caller
		for (let i = 0; i < filteredVehicles.length; i++) {
			for (let j = 0; j < filteredVehicles[i].films.length; j++) {
				finalResults.push(
					`${p1} and ${p2} both traveled on ${doesWordStartWithVowel(
						filteredVehicles[i].name
					)} ${filteredVehicles[i].name} in ${
						filteredVehicles[i].films[j]
					}.`
				);
			}
		}

		return finalResults;
	} else {
		// if there are no common vehicles, we exit the analysis
		return [];
	}
};
