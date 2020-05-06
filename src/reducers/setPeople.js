export const setPeople = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PEOPLE':
			return state.concat(action.payload);
		default:
			return state;
	}
};
