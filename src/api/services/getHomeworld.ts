import axios from 'axios';
import { People } from '../../types';

export const getHomeworlds = async (
	p1: string,
	p2: string,
	personArray: People,
	commonFilmNames: string[]
) => {
	if (personArray[0].homeworld === personArray[1].homeworld) {
		try {
			// obj
			let homeworld = await axios.get(personArray[0].homeworld);

			// string value
			let homeworldName = homeworld.data.name;

			// array of urls
			let homeworldFilms = homeworld.data.films;

			// hydrate film urls array
			const homeWorldFilmTitles: string[] = await Promise.all(
				homeworldFilms.map((url: string) =>
					axios.get(url).then((res) => {
						return res.data.title;
					})
				)
			);

			const filteredFilms = homeWorldFilmTitles.filter((film) =>
				commonFilmNames.includes(film)
			);

			const finalResults: string[] = [];

			if (filteredFilms.length) {
				for (let i = 0; i < filteredFilms.length; i++) {
					finalResults.push(
						`${p1} and ${p2} were seen together on the planet ${homeworldName} in ${filteredFilms[i]}.`
					);
				}
			}

			return finalResults;
		} catch (error) {
			console.log(JSON.stringify({ error: error }));
		}
	} else {
		return [];
	}
};
