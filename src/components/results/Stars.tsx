import React, { useState } from 'react';
import '../../styles/animations/stars.css';
import { generateStars } from './helpers/generateStars';

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
				animation: `zoomOut 40s infinite`,
				animationTimingFunction: 'linear',
			}}
		>
			{stars.map((elem) => {
				return (
					<span
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
							animation: `flicker ${elem.animationTiming} infinite, grow 40s infinite`,
						}}
					/>
				);
			})}
		</div>
	);
};

export default Stars;
