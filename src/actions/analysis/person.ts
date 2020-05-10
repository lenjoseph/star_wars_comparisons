export const setFirstPerson = (payload: { personOne: string }) => {
	return {
		type: 'SET_PERSON_ONE',
		payload,
	};
};

export const setSecondPerson = (payload: { personTwo: string }) => {
	return {
		type: 'SET_PERSON_TWO',
		payload,
	};
};

export const resetSelections = () => {
	return {
		type: 'RESET_SELECTIONS',
	};
};
