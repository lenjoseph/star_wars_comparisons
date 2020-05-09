import axios from "axios";

export const getStarships = async (p1, p2, personArray, commonFilmNames) => {
	// isolate common starships
	const commonStarships = personArray[0].starships.filter((starship) => {
		return personArray[1].starships.includes(starship);
	});

	if (commonStarships.length) {
		// resolve each starship url and nested film using async map
		const starshipObjs = await Promise.all(
			commonStarships.map((url) =>
				axios
					.get(url)
					// res is a starship object
					.then(async (res) => {
						// resolving film objects for film url in each starship
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
											JSON.stringify({
												error: err,
											})
										);
									})
							)
						);
						// return final shape of map to array
						return {
							name: res.data.name,
							films: films,
						};
					})
					.catch((err) => {
						console.log(JSON.stringify({ error: err }));
					})
			)
		);

		// filter the movies for each starship that are not shared across the two people
		const filteredStarships = starshipObjs.map((ss) => {
			let films = ss.films.filter((film) =>
				commonFilmNames.includes(film)
			);
			return { name: ss.name, films: films };
		});

		const finalResults = [];

		// hydrate final results array before returning to caller
		for (let i = 0; i < filteredStarships.length; i++) {
			for (let j = 0; j < filteredStarships[i].films.length; j++) {
				finalResults.push(
					`${p1} and ${p2} both traveled in the ${filteredStarships[i].name} in ${filteredStarships[i].films[j]}.`
				);
			}
		}
		return finalResults;
	} else {
		// if there are no common starships, exit the analysis
		return [];
	}
};
