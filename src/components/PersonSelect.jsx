import React from 'react';
import { css } from 'emotion';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/styles.css';
import { setFirstPerson, setSecondPerson } from '../actions/person';

const PersonSelect = (order) => {
	const people = useSelector((state) => state.people);

	let personOne = useSelector((state) => state.personOne);
	let personTwo = useSelector((state) => state.personTwo);

	const dispatch = useDispatch();

	const setPerson = (person) => {
		if (order.order === 'First') {
			dispatch(setFirstPerson({ personOne: person }));
		} else {
			dispatch(setSecondPerson({ personTwo: person }));
		}
	};

	return (
		<div className={cn.container}>
			<label className={cn.label}>Select {order.order} Person</label>
			<select
				className={cn.select}
				onChange={(e) => {
					e.preventDefault();
					setPerson(e.target.value);
				}}
			>
				<option defaultValue value={'Select Person'}>
					Select Person
				</option>
				{/* generate options from api data stored in redux */}
				{people.map((person, key) => {
					return (
						<option key={key} value={person.name}>
							{person.name}
						</option>
					);
				})}
			</select>
			<div className={cn.selected}>
				{order.order === 'First' && (
					<p className={cn.selectedText}>
						Selected Person: {personOne.personOne}
					</p>
				)}
				{order.order === 'Second' && (
					<p className={cn.selectedText}>
						Selected Person: {personTwo.personTwo}
					</p>
				)}
			</div>
		</div>
	);
};

const cn = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		height: 80%;
		padding: 5px;
		padding-top: 30px;
		border-radius: 4px;
		background: #2d3142;
		box-shadow: 0px 0px 6px #2d3142;
	`,
	label: css`
		display: flex;
		font-family: Ubuntu, sans-serif;
		font-size: 1.3rem;
		margin-bottom: 15px;
		color: #f8f8f8;
	`,
	select: css`
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 80%;
		height: 40px;
		font-family: Ubuntu, sans-serif;
		font-size: 1rem;
		border-radius: 2px;
	`,
	selectedText: css`
		color: #f8f8f8;
		font-size: 1.1rem;
		font-family: Ubuntu, sans-serif;
		padding: 10px;
		text-align: center;
	`,
};

export default PersonSelect;
