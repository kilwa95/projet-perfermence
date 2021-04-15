import React from 'react';

const Article = (props) => {
	return (
		<div className="article d-flex">
			<div className="article-image">
				<img alt="image" src={props.image} width="260" />
			</div>
			<div className="article-content">
				<div className="article-titre">{props.title}</div>
				<div className="article-decription">{props.description}</div>
				<div className="article-user">{props.name}</div>
				<div className="article-date">{props.date}</div>
			</div>
			<div className="article-prix">
				<div>{props.prix} €</div>
			</div>
		</div>
	);
};
export default Article;
