import React from 'react';
import { connect } from 'react-redux';
import { fetchCovid } from '../../store/modules/articles';
import _ from 'lodash';
import Home from './Home';

const mapStateToProps = (state) => {
	return {
		covid: state.articles.covid,
		error: state.articles.error,
		isFetching: state.articles.isFetching
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCovid: () => {
			dispatch(fetchCovid());
		}
	};
};

class HomeContainer extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		const shouldupdate = !_.isEqual(nextProps, this.props);
		return shouldupdate;
	}

	render() {
		let { covid, error, isFetching, fetchCovid } = this.props;
		return <Home covid={covid} isFetching={isFetching} error={error} fetchCovid={fetchCovid} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
