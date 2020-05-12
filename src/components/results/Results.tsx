import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from 'emotion';
import '../../styles/styles.css';
import { hideResults } from '../../actions/results/results';
import { setLoadingTrue, setLoadingFalse } from '../../actions/main/loading';
import Stars from './Stars';
import Comet from './Comet';
import { RootState } from '../../types';

const Results = () => {
	const dispatch = useDispatch();
	const selectResults = (state: RootState) => state.results;
	const results = useSelector(selectResults);
	const exitResults = () => {
		dispatch(hideResults());
		// artifical loading sequence to avoid UI jolt
		dispatch(setLoadingTrue());
		setTimeout(() => {
			dispatch(setLoadingFalse());
		}, 2500);
	};
	return (
		<div className={cn.container}>
			<Stars />
			<Comet top="20%" left="80%" animation="streak1" animationDelay="3s" />
			<Comet top="30%" left="2%" animation="streak2" animationDelay="7s" />
			<Comet top="80%" left="70%" animation="streak3" animationDelay="10s" />
			<Comet top="45%" left="10%" animation="streak4" animationDelay="14s" />
			<Comet top="95%" left="80%" animation="streak5" animationDelay="22s" />
			<Comet top="12%" left="97%" animation="streak6" animationDelay="26s" />
			<div
				style={{
					animation: 'slide 40s linear',
					animationIterationCount: 'infinite',
				}}
				className={cn.slideText}
			>
				{results.map((result, key) => {
					return (
						<p style={{ marginBottom: '5px' }} key={key}>
							{result}
						</p>
					);
				})}
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
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		height: 80%;
		width: 70%;
		max-height: 500px;
		-webkit-perspective: 500px;
		perspective: 500px;
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#11151e),
			to(#2d3142)
		);
		background: -o-linear-gradient(#11151e, #2d3142);
		background: linear-gradient(#11151e, #2d3142);
		border-radius: 8px;
		-webkit-box-shadow: 0px 0px 14px #f8f8f8;
		box-shadow: 0px 0px 14px #f8f8f8;
		margin-top: 40px;
		padding: 10px;
		overflow: hidden;
	`,
	resultsBtn: css`
		position: absolute;
		top: 0;
		right: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
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
		-webkit-box-shadow: 0px 0px 3px #2e7d32;
		box-shadow: 0px 0px 3px #2e7d32;
		&:active {
			box-shadow: inset 0px 0px 4px black;
			-webkit-box-shadow: inset 0px 0px 4px black;
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
			-webkit-box-shadow: none;
		}
	`,
	slideText: css`
		text-align: center;
		position: absolute;
		width: 100%;
		transform-origin: 50% 50%;
		background: transparent;
		color: #f8f8f8;
		font-family: Ubuntu, sans-serif;
		font-size: 2.5rem;
		transition: all 0.5s;
	`,
};
export default Results;
