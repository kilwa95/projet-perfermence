import React from 'react';
import '../menu/Menu.css';
import '../style.css';

const Menu = (props) => {
	return (
		<div className="menu">
			<div>BLOG</div>
			<div className="d-flex justify-content-space-between ">
				<div className="mr-2 menu-lien">Home</div>
				<div className="mr-2 menu-lien">covid</div>
				<div className=" menu-lien">Sport</div>
			</div>
			{/* <div>Home</div>
			<div>Covid</div>
			<div>Sport</div> */}
		</div>
	);
};

export default Menu;
