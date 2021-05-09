import React from 'react';
import '../menu/Menu.css';
import '../style.css';
import { Link } from 'react-router-dom';

const Menu = (props) => {
	return (
		<div className="menu">
			<div>
				<img src="https://secure.meetupstatic.com/photos/event/5/3/2/600_484801330.jpeg" width="90" />
			</div>
			<div>
				<input className="menu-input" placeholder="Rechercher" />
			</div>
			<Link to="/">Covid-19</Link>
			<Link to="/book">books</Link>
		</div>
	);
};
export default Menu;
