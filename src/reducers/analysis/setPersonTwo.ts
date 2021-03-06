export const setPersonTwo = (state = { personTwo: '' }, action) => {
	switch (action.type) {
		case 'SET_PERSON_TWO':
			return { ...state, personTwo: action.payload.personTwo };
		case 'RESET_SELECTIONS':
			return { ...state, personTwo: '' };
		default:
			return state;
	}
};
