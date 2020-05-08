import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { css } from "emotion";
import "../../styles/styles.css";
import { hideResults } from "../../actions/results/results";
import { setLoadingTrue, setLoadingFalse } from "../../actions/main/loading";

const Results = () => {
	const dispatch = useDispatch();
	const results = useSelector((state) => state.results);
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
			<div
				style={{
					animation: "slide 200s linear",
					animationIterationCount: "infinite",
				}}
				className={cn.slideText}
			>
				{results.map((result, key) => {
					return (
						<p style={{ marginBottom: "5px" }} key={key}>
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
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
		height: 80%;
		min-height: 450px;
		max-height: 500px;
		perspective: 500px;
		width: 70%;
		background: linear-gradient(#1a1e28, #2d3142);
		border-radius: 8px;
		box-shadow: 0px 0px 14px #f8f8f8;
		margin-top: 40px;
		padding: 10px;
		overflow: hidden;
	`,
	resultsBtn: css`
		position: absolute;
		top: 0;
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
		width: 100%;
		transform-origin: 50% 100%;
		background: transparent;
		color: #f8f8f8;
		font-family: Ubuntu, sans-serif;
		font-size: 2rem;
		transition: all 0.5s;
	`,
};
export default Results;
