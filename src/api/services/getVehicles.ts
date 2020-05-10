import { hydrateData } from '../helpers/hydrateData';
import { doesWordStartWithVowel } from '../helpers/vowelCheck';
import { People, Vehicle } from '../../types';

export const getVehicles = async (
	p1: string,
	p2: string,
	personArray: People,
	commonFilmNames: string[]
) => {
	let commonVehicles = personArray[0].vehicles.filter((vehicle) =>
		personArray[1].vehicles.includes(vehicle)
	);
	if (commonVehicles.length) {
		// resolve each vehicle url and nested film using async map
		const vehicleObjs = await hydrateData(commonVehicles);

		// filter the vehicle array for any vehicle films that were not included in the common films
		const filteredVehicles = vehicleObjs.map((veh) => {
			let films = veh.films.filter((film) => commonFilmNames.includes(film));
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
					)} ${filteredVehicles[i].name} in ${filteredVehicles[i].films[j]}.`
				);
			}
		}

		return finalResults;
	} else {
		// if there are no common vehicles, we exit the analysis
		return [];
	}
};
