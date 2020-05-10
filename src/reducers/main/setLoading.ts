export const setLoading = (state = { loading: true }, action) => {
	switch (action.type) {
		case 'LOADING_TRUE':
			return { ...state, loading: true };
		case 'LOADING_FALSE':
			return { ...state, loading: false };
		default:
			return state;
	}
};
