import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { fetchPeople } from '../../actions/analysis/people';
import { css } from 'emotion';
import { RootState } from '../../types/index';
import Header from './Header';
import Disclaimer from './Disclaimer';
import Loading from './Loading';
import AnalysisModule from '../analysis/AnalysisModule';
import Results from '../results/Results';

const Main = () => {
	const dispatch = useDispatch();

	const selectLoading = (state: RootState) => state.loading.loading;
	const loading = useSelector(selectLoading);
	const selectShowingResults = (state: RootState) =>
		state.showingResults.showingResults;
	const showingResults = useSelector(selectShowingResults);
	useEffect(() => {
		// dispatch redux thunk to retrieve data and hydrate state
		dispatch(fetchPeople(dispatch));
	}, []);
	return (
		<div className={cn.container}>
			<Header />
			<SwitchTransition mode="out-in">
				<CSSTransition
					key={
						loading ? 'loading' : showingResults ? 'showingResult' : 'analysis'
					}
					timeout={400}
					classNames="fade"
				>
					<>
						{loading ? (
							<Loading />
						) : showingResults ? (
							<Results />
						) : (
							<AnalysisModule />
						)}
					</>
				</CSSTransition>
			</SwitchTransition>
			<Disclaimer />
		</div>
	);
};

const cn = {
	container: css`
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: start;
		-ms-flex-pack: start;
		justify-content: flex-start;
		height: 100vh;
		width: 100vw;
		flex-direction: column;
		background: transparent;
	`,
};

export default Main;
