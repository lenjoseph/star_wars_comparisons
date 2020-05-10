import React from 'react';
import { css } from 'emotion';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/styles.css';
import { setFirstPerson, setSecondPerson } from '../../actions/analysis/person';
import { RootState, Person, People } from '../../types';

type PersonSelectProps = {
	order: string;
	people: People;
	personOne: string;
	personTwo: string;
};

const PersonSelect = ({
	order,
	people,
	personOne,
	personTwo,
}: PersonSelectProps) => {
	const dispatch = useDispatch();

	const setPerson = (person: string) => {
		if (order === 'First') {
			dispatch(setFirstPerson({ personOne: person }));
		} else {
			dispatch(setSecondPerson({ personTwo: person }));
		}
	};

	return (
		<div className={cn.container}>
			<label className={cn.label}>Select {order} Person</label>
			<select
				className={cn.select}
				onChange={(e) => {
					e.preventDefault();
					setPerson(e.target.value);
				}}
			>
				<option value={'Select Person'}>Select Person</option>
				{/* generate options from api data stored in redux */}
				{people.map((person: Person, key: number) => {
					return (
						<option key={key} value={person.name}>
							{person.name}
						</option>
					);
				})}
			</select>
			<div>
				{order === 'First' && (
					<p className={cn.selectedText}>Selected Person: {personOne}</p>
				)}
				{order === 'Second' && (
					<p className={cn.selectedText}>Selected Person: {personTwo}</p>
				)}
			</div>
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
		width: 90%;
		height: 80%;
		padding: 5px;
		padding-top: 30px;
		border-radius: 4px;
		background: #2d3142;
		-webkit-box-shadow: 0px 0px 6px #2d3142;
		box-shadow: 0px 0px 6px #2d3142;
	`,
	label: css`
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		font-family: Ubuntu, sans-serif;
		font-size: 1.3rem;
		margin-bottom: 15px;
		color: #f8f8f8;
	`,
	select: css`
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
