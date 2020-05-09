import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { getPeople } from "../../analysis/helpers/getPeople";
import { setPeople } from "../../actions/analysis/people";
import { setLoadingFalse } from "../../actions/main/loading";
import { css } from "emotion";
import Header from "./Header.jsx";
import Loading from "./Loading.jsx";
import AnalysisModule from "../analysis/AnalysisModule.jsx";
import Results from "../results/Results.jsx";

const Main = () => {
	const dispatch = useDispatch();

	const loading = useSelector((state) => state.loading.loading);
	const resultsShowing = useSelector(
		(state) => state.showingResults.showingResults
	);
	useEffect(() => {
		new Promise((resolve, reject) => {
			getPeople("https://swapi.dev/api/people/", [], resolve, reject);
		})
			.then((res) => {
				dispatch(
					setPeople(
						res.map((person) => {
							return {
								name: person.name,
								films: person.films,
								homeworld: person.homeworld,
								starships: person.starships,
								vehicles: person.vehicles,
							};
						})
					)
				);
				dispatch(setLoadingFalse());
			})
			.catch((err) => {
				console.log(JSON.stringify({ error: err }));
			});
	}, []);
	return (
		<div className={cn.container}>
			<Header />
			<SwitchTransition mode="out-in">
				<CSSTransition key={loading} timeout={400} classNames="fade">
					<>
						{loading ? (
							<Loading />
						) : resultsShowing ? (
							<Results />
						) : (
							<AnalysisModule />
						)}
					</>
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

const cn = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100vh;
		width: 100vw;
		flex-direction: column;
		background: transparent;
	`,
};

export default Main;
