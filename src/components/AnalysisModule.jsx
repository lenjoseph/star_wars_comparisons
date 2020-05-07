import React, { useState } from 'react';
import { css } from 'emotion';
import { useDispatch, useSelector } from 'react-redux';
import PersonSelect from './PersonSelect.jsx';
import { setLoadingTrue, setLoadingFalse } from '../actions/loading';
import { comparePeople } from '../helpers/comparePeople';
import '../styles/styles.css';

const AnalysisModule = () => {
	const [finalResults, updateFinalResults] = useState([]);

	let people = useSelector((state) => state.people);
	let personOne = useSelector((state) => state.personOne);
	let personTwo = useSelector((state) => state.personTwo);

	const dispatch = useDispatch();

	const startComparison = async () => {
		dispatch(setLoadingTrue());
		let results = await comparePeople(
			personOne.personOne,
			personTwo.personTwo,
			people
		);
		let concatenatedResults = [].concat.apply([], results);
		console.log(concatenatedResults);
		setTimeout(() => {
			dispatch(setLoadingFalse());
		}, 2000);
	};

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
			<div className={cn.controls}>
				<button
					disabled={!personOne.personOne || !personTwo.personTwo}
					onClick={() => {
						startComparison();
					}}
					className={cn.runComparison}
				>
					Run Comparison
				</button>
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
	controls: css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 20%;
		width: 100%;
	`,
	headerText: css`
		font-family: Ubuntu, sans-serif;
		font-size: 1.6rem;
		color: #2d3142;
	`,
	runComparison: css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 3px;
		border: none;
		height: 40px;
		padding-left: 15px;
		padding-right: 15px;
		background: #2e7d32;
		color: white;
		font-family: ubuntu, sans-serif;
		font-size: 1.2rem;
		box-shadow: 0px 0px 3px #2e7d32;
		&:active {
			box-shadow: inset 0px 0px 4px black;
			outline: none;
		}
		&:focus {
			outline: none;
		}
		&:hover {
			cursor: pointer;
		}
		&:disabled {
			background: #a0a0a0;
			box-shadow: none;
		}
	`,
	selectGroup: css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		height: 60%;
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

export default AnalysisModule;
