import React from 'react';

const Background = () => {
	return (
		<div
			style={{
				background: '#2d3142',
				display: 'flex',
				position: 'fixed',
				height: '100vh',
				width: '100vw',
				zIndex: -1,
			}}
		></div>
	);
};

export default Background;
