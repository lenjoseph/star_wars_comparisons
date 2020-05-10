import axios from "axios";
import Bluebird from "bluebird";

export const hydrateData = async (commonArray) => {
	// function is passed into getObject mapper to resolve film title of each film url
	const getFilmTitle = async (url) => {
		const { data } = await axios.get(url);
		return data.title;
	};

	// function is passed into getObjects mapper to resolve each vehicle or starship
	const getObject = async (url) => {
		const { data } = await axios.get(url);
		const films = await Bluebird.map(data.films, getFilmTitle, {
			concurrency: 3,
		});
		return {
			name: data.name,
			films,
		};
	};

	// function is mapper that resolves each vehicle using passed in resolvers and concurrency control
	const getObjects = async (commonArray) => {
		const objects = await Bluebird.map(commonArray, getObject, {
			concurrency: 3,
		});
		return objects;
	};

	return getObjects(commonArray);
};
