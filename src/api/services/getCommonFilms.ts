import { People } from '../../types';

export const getCommonFilms = (personArray: People) => {
	const commonFilms = [];
	if (personArray[0].films.length && personArray[1].films.length) {
		if (personArray[0].films.length < personArray[1].films.length) {
			personArray[0].films.forEach((film) => {
				if (personArray[1].films.includes(film)) {
					commonFilms.push(film);
				}
			});
		} else {
			personArray[1].films.forEach((film) => {
				if (personArray[0].films.includes(film)) {
					commonFilms.push(film);
				}
			});
		}
	}
	return commonFilms;
};
