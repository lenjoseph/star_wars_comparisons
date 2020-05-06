import React from 'react';
import './styles/styles.css';
import Background from './components/Background.jsx';
import Main from './components/Main.jsx';
// person: name, films, homeworld, starships, vehicles

const App = () => {
	return (
		<>
			<Background />
			<Main />
		</>
	);
};

/* deepBlue: #2d3142;
mutedBlue: #4f5d75;
grey: #bfc0c0;
white: #ffffff;
orange: #ef8354; */

export default App;

// 1. get all the names
// 2. when name is selected, fetch planet, starship, and vehicle data
// 3. when both names selected, check if there is overlap
