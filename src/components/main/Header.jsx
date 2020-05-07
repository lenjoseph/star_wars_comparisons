import React from 'react';
import { css } from 'emotion';

const Header = () => {
	return (
		<div className={cn.header}>
			<p className={cn.headerText}>
				Welcome to the Star Wars Personnel Explorer
			</p>
		</div>
	);
};

const cn = {
	header: css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 80%;
		border-radius: 10px;
		padding: 30px;
	`,
	headerText: css`
		font-family: Ubuntu, sans-serif;
		color: #f8f8f8;
		font-size: 2rem;
		margin: 0;
	`,
};

export default Header;
