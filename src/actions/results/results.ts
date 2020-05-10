export const updateResults = (payload: string[]) => {
	return {
		type: 'UPDATE_RESULTS',
		payload,
	};
};

export const clearResults = () => {
	return {
		type: 'CLEAR_RESULTS',
	};
};
export const showResults = () => {
	return {
		type: 'SHOW_RESULTS',
	};
};

export const hideResults = () => {
	return {
		type: 'HIDE_RESULTS',
	};
};
