import axios from "axios";

export const getHomeworlds = async (p1, p2, personArray, commonFilmNames) => {
	if (personArray[0].homeworld === personArray[1].homeworld) {
		// obj
		let homeworld = await axios
			.get(personArray[0].homeworld)
			.catch((err) => {
				console.log(JSON.stringify({ error: err }));
			});

		// string value
		let homeworldName = homeworld.data.name;

		// array of urls
		let homeworldFilms = homeworld.data.films;

		// hydrate film urls array
		const homeWorldFilmTitles = await Promise.all(
			homeworldFilms.map((url) =>
				axios.get(url).then((res) => {
					return res.data.title;
				})
			)
		).catch((err) => {
			console.log(JSON.stringify({ error: err }));
		});

		const filteredFilms = homeWorldFilmTitles.filter((film) =>
			commonFilmNames.includes(film)
		);

		const finalResults = [];

		if (filteredFilms.length) {
			for (let i = 0; i < filteredFilms.length; i++) {
				finalResults.push(
					`${p1} and ${p2} were seen together on the planet ${homeworldName} in ${filteredFilms[i]}.`
				);
			}
		}

		return finalResults;
	} else {
		return [];
	}
};
