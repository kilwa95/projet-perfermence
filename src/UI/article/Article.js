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
							'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg'
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
