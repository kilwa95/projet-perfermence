import React from 'react';

const Article = (props) => {
	return (
		<div className="article d-flex">
			<div className="article-image">
				<img
					alt="image"
					src={
						props.type === 'article' ? (
							props.image
						) : (
							'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_600,h_518/https://www.pop-pins.com/wp-content/uploads/2018/08/6-photography-books-for-beginners.jpg'
						)
					}
					width="260"
				/>
			</div>
			<div className="article-content">
				<div className="article-titre">{props.title}</div>
				<div className="article-decription">{props.type === 'article' ? props.description : props.summary}</div>
				<div className="article-user">{props.type === 'article' ? props.name : ''}</div>
				<div className="article-date">{props.type === 'article' ? props.date : props.publicationDate}</div>
			</div>
			<div className="article-prix">
				<div>{props.type === 'article' ? props.prix : 0} €</div>
			</div>
		</div>
	);
};
export default Article;
