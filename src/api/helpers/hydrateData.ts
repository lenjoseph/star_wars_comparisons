import axios from 'axios';
import Bluebird from 'bluebird';
import { convertToHTTPS } from './safeURL';

export const hydrateData = async (commonArray: string[]) => {
	try {
		// function is passed into getObject mapper to resolve film title of each film url
		const getFilmTitle = async (url: string) => {
			const { data } = await axios.get(convertToHTTPS(url));
			return data.title;
		};

		// function is passed into getObjects mapper to resolve each vehicle or starship
		const getObject = async (url: string) => {
			const { data } = await axios.get(convertToHTTPS(url));
			const films: string[] = await Bluebird.map(data.films, getFilmTitle, {
				concurrency: 3,
			});
			return {
				name: data.name,
				films,
			};
		};

		// function is mapper that resolves each vehicle or starship from urls in commonArray using passed in resolvers and concurrency control
		const getObjects = async (commonArray: string[]) => {
			const objects = await Bluebird.map(commonArray, getObject, {
				concurrency: 3,
			});
			return objects;
		};

		return getObjects(commonArray);
	} catch (error) {
		console.log(JSON.stringify({ error: error }));
	}
};
