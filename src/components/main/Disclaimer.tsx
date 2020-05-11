import React from 'react';
import { css } from 'emotion';

const Disclaimer = () => {
	return (
		<div className={cn.disclaimer}>
			<p className={cn.disclaimerText}>
				* This data is sourced from the{' '}
				<a
					className={cn.link}
					target="_blank"
					rel="noopener noreferrer"
					href="https://swapi.dev/"
				>
					Star Wars API
				</a>
				.
			</p>
		</div>
	);
};

const cn = {
	disclaimer: css`
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: flex-start;
		width: 50%;
		padding-top: 30px;
	`,
	disclaimerText: css`
		font-family: Ubuntu, sans-serif;
		color: #f8f8f8;
		font-size: 1rem;
		margin: 0;
	`,
	link: css`
		color: #f8f8f8;
	`,
};

export default Disclaimer;
