import axios from "axios";

export const hydrateData = async (commonArray) => {
	const data = await Promise.all(
		// commonArray is an array of shared vehicles or starships
		commonArray.map((url) =>
			axios
				.get(url)
				// res is a vehicle or starship object
				.then(async (res) => {
					// resolving film objects for film url in each object
					const films = await Promise.all(
						res.data.films.map(async (url) =>
							axios
								.get(url)
								.then((res) => {
									// return just title of film
									return res.data.title;
								})
								.catch((err) => {
									console.log(JSON.stringify({ error: err }));
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
		return JSON.stringify({ error: err });
	});
	// return final array to caller
	return data;
};
