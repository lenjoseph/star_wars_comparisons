import { People, Planet, Films } from '../../types';
import { convertToHTTPS } from '../helpers/safeURL';

export const getHomeworlds = async (
	p1: string,
	p2: string,
	personArray: People,
	commonFilmNames: string[]
) => {
	if (personArray[0].homeworld === personArray[1].homeworld) {
		try {
			const homeworldURL: string = personArray[0].homeworld;
			const homeworldResponse = await fetch(convertToHTTPS(homeworldURL));

			const homeworld = await homeworldResponse.json();
			const homeworldName: string = homeworld.name;

			const homeworldFilms: Films = homeworld.films;

			// hydrate film urls array
			const homeWorldFilmTitles: string[] = await Promise.all(
				homeworldFilms.map((url: string) =>
					fetch(convertToHTTPS(url)).then(async (res) => {
						const data = await res.json();
						return data.title;
					})
				)
			);

			const filteredFilms: string[] = homeWorldFilmTitles.filter((film) =>
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
