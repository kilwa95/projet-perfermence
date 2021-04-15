import React from 'react';
import '../menu/Menu.css';
import '../style.css';

const Menu = (props) => {
	return (
		<div className="menu">
			<div>
				<img src="https://secure.meetupstatic.com/photos/event/5/3/2/600_484801330.jpeg" width="90" />
			</div>
			<div>
				<input className="menu-input" placeholder="Rechercher" />
			</div>
			<div>Covid-19</div>
			<div>Sports</div>
			<div>Jeux</div>
		</div>
	);
};
export default Menu;
