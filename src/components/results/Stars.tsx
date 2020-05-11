import React, { useState } from 'react';
import '../../styles/styles.css';

const generateStars = () => {
	let stars = [...Array.from({ length: 50 }, (v, k) => k + 1)].map((elem) => {
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

const Stars = () => {
	const [stars] = useState(generateStars());

	return (
		<div
			style={{
				position: `fixed`,
				display: `flex`,
				height: `100%`,
				width: `100%`,
				zIndex: -1,
				animation: `zoomOut 50s infinite`,
			}}
		>
			{stars.map((elem) => {
				return (
					<div
						key={elem.key}
						style={{
							position: 'absolute',
							height: `${elem.height}`,
							width: `${elem.width}`,
							borderRadius: `${elem.borderRadius}`,
							background: `${elem.background}`,
							top: `${elem.top}`,
							left: `${elem.left}`,
							zIndex: elem.zIndex,
							margin: `${elem.margin}`,
							animation: `flicker ${elem.animationTiming} infinite, grow 50s infinite`,
						}}
					/>
				);
			})}
		</div>
	);
};

export default Stars;
