import React from 'react';
import { css } from 'emotion';
import '../../styles/styles.css';

type CometProps = {
	top: string;
	left: string;
	animation: string;
	animationDelay: string;
};

const Comet = ({ top, left, animation, animationDelay }: CometProps) => {
	return (
		<div
			className={cn.comet}
			style={{
				top: `${top}`,
				left: `${left}`,
				animation: `${animation} 40s linear infinite`,
				animationDelay: `${animationDelay}`,
			}}
		></div>
	);
};

const cn = {
	comet: css`
		position: absolute;
		height: 2px;
		width: 2px;
		border-radius: 50%;
		background: #ffffff;
		opacity: 0;
		z-index: -1;
	`,
};

export default Comet;
