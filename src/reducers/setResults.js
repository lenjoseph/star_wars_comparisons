export const updateResults = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_RESULTS':
			return state.concat(action.payload);
		case 'CLEAR_RESULTS':
			return [];
		default:
			return state;
	}
};
