import React from 'react';
import { css } from 'emotion';
import PersonSelect from './PersonSelect.jsx';
import '../styles/styles.css';

const SelectModule = () => {
	return (
		<div className={cn.container}>
			<div className={cn.selectHeader}>
				<p className={cn.headerText}>Select two people to compare</p>
			</div>
			<div className={cn.selectGroup}>
				<div className={cn.selectSide}>
					<PersonSelect order={'First'} />
				</div>
				<div className={cn.selectSide}>
					<PersonSelect order={'Second'} />
				</div>
			</div>
		</div>
	);
};

const cn = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 70%;
		min-height: 450px;
		max-height: 500px;
		width: 50%;
		background: #f8f8f8;
		border-radius: 8px;
		margin-top: 40px;
		padding: 10px;
	`,
	headerText: css`
		font-family: Ubuntu, sans-serif;
		font-size: 1.6rem;
		color: #2d3142;
	`,
	selectGroup: css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		height: 80%;
		width: 100%;
	`,
	selectHeader: css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 20%;
		width: 100%;
	`,
	selectSide: css`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
		width: 50%;
	`,
};

export default SelectModule;
