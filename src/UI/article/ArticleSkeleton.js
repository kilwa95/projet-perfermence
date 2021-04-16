import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ArticleSkeleton = (props) => {
	return (
		<div className="article d-flex">
			<div className="article-image">{<Skeleton height={146} />}</div>
			<div className="article-content">
				<div className="article-titre">
					<Skeleton />{' '}
				</div>
				<div className="article-decription">
					<Skeleton />{' '}
				</div>
				<div className="article-user">
					<Skeleton />{' '}
				</div>
				<div className="article-date">
					<Skeleton />{' '}
				</div>
			</div>
		</div>
	);
};

export default ArticleSkeleton;
