export const generateStars = () => {
	let stars = [...Array.from({ length: 160 }, (v, k) => k + 1)].map((elem) => {
		let heightandWidth = Math.random() * 2;
		return {
			key: elem,
			height: `${heightandWidth}px`,
			width: `${heightandWidth}px`,
			borderRadius: `50%`,
			background: `#f8f8f8`,
			margin: 0,
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			animationTiming: `${Math.random() * 5 + 3}s`,
			zIndex: -1,
		};
	});
	return stars;
};
