import React, { useEffect, useState } from "react";
import { css } from "emotion";
import { useDispatch, useSelector } from "react-redux";
import PersonSelect from "./PersonSelect.jsx";
import { setLoadingTrue, setLoadingFalse } from "../../actions/main/loading";
import {
	updateResults,
	showResults,
	clearResults,
} from "../../actions/results/results";
import { comparePeople } from "../../analysis";
import "../../styles/styles.css";
import { resetSelections } from "../../actions/analysis/person.js";

const AnalysisModule = () => {
	let people = useSelector((state) => state.people);
	let personOne = useSelector((state) => state.personOne);
	let personTwo = useSelector((state) => state.personTwo);
	const dispatch = useDispatch();
	useEffect(() => {
		// clearing out results and selections from previous analysis stored in state
		dispatch(clearResults());
		dispatch(resetSelections());
	}, []);
	const startComparison = async () => {
		dispatch(setLoadingTrue());
		// call helper to perform analysis on api data in state
		const results = await comparePeople(
			personOne.personOne,
			personTwo.personTwo,
			people
		);
		// assemble final results from promises
		const finalResults = [].concat.apply([], results);
		// data is ready before settimeout finished, but the delay makes the transition more engaging
		setTimeout(() => {
			dispatch(setLoadingFalse());
			dispatch(updateResults(finalResults));
			dispatch(showResults());
		}, 2000);
	};

	const isDisabled = () => {
		return (
			!personOne.personOne ||
			!personTwo.personTwo ||
			personOne.personOne === "Select Person" ||
			personTwo.personTwo === "Select Person" ||
			personOne.personOne === personTwo.personTwo
		);
	};
	return (
		<>
			<div className={cn.container}>
				<div className={cn.selectHeader}>
					<p className={cn.headerText}>
						Select two people to compare
					</p>
				</div>
				<div className={cn.selectGroup}>
					<div className={cn.selectSide}>
						<PersonSelect order={"First"} />
					</div>
					<div className={cn.selectSide}>
						<PersonSelect order={"Second"} />
					</div>
				</div>
				<div className={cn.controls}>
					<button
						disabled={isDisabled()}
						onClick={() => {
							startComparison();
						}}
						className={cn.runComparison}
					>
						Run Comparison
					</button>
				</div>
			</div>
		</>
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
		transition: all 0.5s;
	`,
	controls: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 20%;
		width: 100%;
	`,
	feedback: css`
		font-family: Ubuntu, sans-serif;
		font-size: 1.1rem;
		color: #2d3142;
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
		box-shadow: 0px 0px 6px #2e7d32;
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
