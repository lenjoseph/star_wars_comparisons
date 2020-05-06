import React from 'react';
import { css } from 'emotion';
import { useSelector } from 'react-redux';
import '../styles/styles.css';

const PersonSelect = (order) => {
	const people = useSelector((state) => state.people);

	return (
		<div className={cn.container}>
			<label className={cn.label}>Select {order.order} Person</label>
			<select
				className={cn.select}
				defaultValue={people[0].name}
				onChange={() => {}}
			>
				{people.map((person, key) => {
					return (
						<option key={key} value={person.name}>
							{person.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

const cn = {
	container: css`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 90%;
		height: 70%;
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
		width: 80%;
		height: 40px;
		font-family: Ubuntu, sans-serif;
		font-size: 1rem;
		border-radius: 2px;
	`,
};

export default PersonSelect;
