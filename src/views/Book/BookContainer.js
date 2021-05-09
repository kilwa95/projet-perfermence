import React from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../../store/modules/articles';
import _ from 'lodash';
import Book from './Book';

const mapStateToProps = (state) => {
	return {
		books: state.articles.books,
		error: state.articles.error,
		isFetching: state.articles.isFetching
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBook: () => {
			dispatch(fetchBook());
		}
	};
};

class BookContainer extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		const shouldupdate = !_.isEqual(nextProps, this.props);
		return shouldupdate;
	}

	render() {
		let { books, error, isFetching, fetchBook } = this.props;
		return <Book books={books} isFetching={isFetching} error={error} fetchBook={fetchBook} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
