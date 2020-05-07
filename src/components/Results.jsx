import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from 'emotion';
import '../styles/styles.css';
import { hideResults, clearResults } from '../actions/results';

const Results = () => {
	const dispatch = useDispatch();
	const results = useSelector((state) => state.results);
	const p1 = useSelector((state) => state.personOne.personOne);
	const p2 = useSelector((state) => state.personTwo.personTwo);
	const exitResults = () => {
		dispatch(hideResults());
	};
	return (
		<div className={cn.container}>
			<div style={{ animation: 'slide 180s linear' }} className={cn.slideText}>
				{results.length > 0 &&
					results.map((result, key) => {
						return (
							<p style={{ marginBottom: '10px' }} key={key}>
								{result}
							</p>
						);
					})}
				{results.length === 0 && (
					<p
						style={{ marginBottom: '10px' }}
					>{`${p1} and ${p2} appeared in one or more films toghter, but never shared a vehicle, starship, or homeland.`}</p>
				)}
			</div>
			<button
				className={cn.resultsBtn}
				onClick={() => {
					exitResults();
				}}
			>
				New Analysis
			</button>
		</div>
	);
};

const cn = {
	container: css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 70%;
		min-height: 450px;
		max-height: 500px;
		perspective: 400px;
		width: 50%;
		background: transparent;
		border-radius: 8px;
		box-shadow: 0px 0px 14px #f8f8f8;
		margin-top: 40px;
		padding: 10px;
	`,
	resultsBtn: css`
		position: absolute;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 3px;
		border: none;
		margin: 20px;
		height: 40px;
		padding-left: 15px;
		padding-right: 15px;
		background: #f8f8f8;
		color: #2d3142;
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
	slideText: css`
		text-align: center;
		position: relative;
		top: 100px;
		transform-origin: 50% 100%;
		background: transparent;
		color: #f8f8f8;
		font-family: Ubuntu, sans-serif;
		font-size: 1.4rem;
	`,
};
export default Results;
