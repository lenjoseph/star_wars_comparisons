export const setPersonOne = (state = { personOne: '' }, action) => {
	switch (action.type) {
		case 'SET_PERSON_ONE':
			return { ...state, personOne: action.payload.personOne };
		case 'RESET_SELECTIONS':
			return { ...state, personOne: '' };
		default:
			return state;
	}
};
