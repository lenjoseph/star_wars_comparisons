import { People, Person } from '../../types';
import { getPeople } from '../../api/services/getPeople';
import { setLoadingFalse } from '../main/loading';

export const setPeople = (payload: People) => {
	return {
		type: 'ADD_PEOPLE',
		payload,
	};
};

export const fetchPeople = (dispatch: any) => {
	return () => {
		new Promise((resolve, reject) => {
			getPeople('https://swapi.dev/api/people/', [], resolve, reject);
		})
			.then((res: People) => {
				const people = res.map((person: Person) => {
					return {
						name: person.name,
						films: person.films,
						homeworld: person.homeworld,
						starships: person.starships,
						vehicles: person.vehicles,
					};
				});
				dispatch(setPeople(people));
				dispatch(setLoadingFalse());
			})
			.catch((err) => {
				console.log(JSON.stringify({ error: err.message }));
			});
	};
};
