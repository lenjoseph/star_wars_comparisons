import { People } from '../../types';

export const setPeople = (payload: People) => {
	return {
		type: 'ADD_PEOPLE',
		payload,
	};
};
