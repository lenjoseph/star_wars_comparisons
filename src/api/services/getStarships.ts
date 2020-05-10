import { hydrateData } from '../helpers/hydrateData';
import { People, Starship, Starships } from '../../types';

export const getStarships = async (
	p1: string,
	p2: string,
	personArray: People,
	commonFilmNames: string[]
) => {
	// isolate common starships
	const commonStarships: string[] = personArray[0].starships.filter(
		(starship) => {
			return personArray[1].starships.includes(starship);
		}
	);

	if (commonStarships.length) {
		try {
			// resolve each starship url and nested film using async map
			const starshipObjs = await hydrateData(commonStarships);

			// filter the movies for each starship that are not shared across the two people
			const filteredStarships = starshipObjs.map((ss: Starship) => {
				let films = ss.films.filter((film: string) =>
					commonFilmNames.includes(film)
				);
				return { name: ss.name, films: films };
			});

			const finalResults: string[] = [];

			// hydrate final results array before returning to caller
			for (let i = 0; i < filteredStarships.length; i++) {
				for (let j = 0; j < filteredStarships[i].films.length; j++) {
					finalResults.push(
						`${p1} and ${p2} both traveled in the ${filteredStarships[i].name} in ${filteredStarships[i].films[j]}.`
					);
				}
			}
			return finalResults;
		} catch (error) {
			console.log(JSON.stringify({ error: error }));
		}
	} else {
		// if there are no common starships, exit the analysis
		return [];
	}
};
