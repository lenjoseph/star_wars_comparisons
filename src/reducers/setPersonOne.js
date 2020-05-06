const setPersonOne = (state = { personOne: '' }, action) => {
	switch (action.type) {
		case 'SET_PERSON_ONE':
			return { ...state, personeOne: action.payload };
		default:
			return state;
	}
};

export default setPersonOne;
