export const updateResults = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_RESULTS':
			return state.concat(action.payload);
		case 'CLEAR_RESULTS':
			return state.splice(0, state.length);
		default:
			return state;
	}
};
