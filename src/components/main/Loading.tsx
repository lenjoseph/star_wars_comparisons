import React from "react";
import { css } from "emotion";
import "../../styles/styles.css";

const Loading = () => {
	return (
		<div className={cn.container}>
			<p className={cn.loadingText}>
				Contacting the Imperial Data Center
			</p>
			<div
				style={{ animation: ".75s beat1 infinite" }}
				className={cn.loadingDot}
			></div>
			<div
				style={{ animation: ".75s beat2 infinite" }}
				className={cn.loadingDot}
			></div>
			<div
				style={{ animation: ".75s beat3 infinite" }}
				className={cn.loadingDot}
			></div>
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
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		height: 70%;
		min-height: 450px;
		max-height: 500px;
		width: 50%;
		background: transparent;
		border-radius: 8px;
		-webkit-box-shadow: 0px 0px 14px #f8f8f8;
		box-shadow: 0px 0px 14px #f8f8f8;
		margin-top: 40px;
		padding: 10px;
		-webkit-transition: all 0.3s;
		-o-transition: all 0.3s;
		transition: all 0.3s;
	`,
	loadingDot: css`
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		height: 6px;
		width: 6px;
		border-radius: 50%;
		margin: 6px;
		background: #f8f8f8;
	`,
	loadingText: css`
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		font-family: ubuntu, sans-serif;
		font-size: 1.8rem;
		font-style: italic;
		color: #f8f8f8;
		margin: 0;
		margin-bottom: 14px;
	`,
};
export default Loading;
