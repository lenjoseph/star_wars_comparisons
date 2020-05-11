export const convertToHTTPS = (url: string) => {
	return url.includes('http:') ? url.replace(/^http:\/\//i, 'https://') : url;
};
