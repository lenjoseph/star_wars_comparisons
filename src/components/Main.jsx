import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { getPeople } from '../helpers/getPeople';
import { setPeople } from '../actions/people';
import { setLoadingFalse } from '../actions/loading';
import { css } from 'emotion';
import Header from './Header.jsx';
import Loading from './Loading.jsx';
import AnalysisModule from './AnalysisModule.jsx';

const Main = () => {
	const dispatch = useDispatch();

	const loading = useSelector((state) => state.loading.loading);
	useEffect(() => {
		new Promise((resolve, reject) => {
			getPeople('https://swapi.dev/api/people/', [], resolve, reject);
		}).then((res) => {
			console.log(
				res.map((person) => {
					return {
						name: person.name,
						films: person.films,
						homeworld: person.homeworld,
						starships: person.starships,
						vehicles: person.vehicles,
					};
				})
			);
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
		});
	}, []);
	return (
		<div className={cn.container}>
			<Header />
			<SwitchTransition mode="out-in">
				<CSSTransition key={loading} timeout={400} classNames="fade">
					<>{loading ? <Loading /> : <AnalysisModule />}</>
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
