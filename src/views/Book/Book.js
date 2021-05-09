import React from 'react';
import Menu from '../../UI/menu/Menu';
import ArticleTotal from '../../UI/article/ArticleTotal';
import Container from '../../UI/lib/Container';
import Article from '../../UI/article/Article';
import ArticlesSkeleton from '../../UI/article/ArticlesSkeleton';

class Book extends React.Component {
	componentDidMount() {
		this.props.fetchBook();
	}
	render() {
		let { books, error, isFetching } = this.props;
		return (
			<React.Fragment>
				<Menu />
				<Container>
					<ArticleTotal count={books.length} />

					{!isFetching ? (
						books.map((book) => (
							<Article
								type={'book'}
								title={book.title}
								summary={book.summary}
								publicationDate={book.publicationDate}
							/>
						))
					) : (
						<ArticlesSkeleton />
					)}
				</Container>
			</React.Fragment>
		);
	}
}
export default Book;
