import React from 'react';

class Book extends React.Component {
	componentDidMount() {
		this.props.fetchBook();
	}
	render() {
		let { books, error, isFetching } = this.props;
		return <React.Fragment />;
	}
}
export default Book;
