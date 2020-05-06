const setPersonTwo = (state = { personTwo: '' }, action) => {
	switch (action.type) {
		case 'SET_PERSON_TWO':
			return { ...state, personeTwo: action.payload };
		default:
			return state;
	}
};

export default setPersonTwo;
