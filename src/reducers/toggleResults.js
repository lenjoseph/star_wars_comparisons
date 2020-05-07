export const toggleResults = (state = { showingResults: false }, action) => {
	switch (action.type) {
		case 'SHOW_RESULTS':
			return { ...state, showingResults: true };
		case 'HIDE_RESULTS':
			return { ...state, showingResults: false };
		default:
			return state;
	}
};
