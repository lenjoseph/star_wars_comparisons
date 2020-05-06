export const setFirstPerson = (payload) => {
	return {
		type: 'SET_PERSON_ONE',
		payload,
	};
};

export const setSecondPerson = (payload) => {
	return {
		type: 'SET_PERSON_TWO',
		payload,
	};
};
