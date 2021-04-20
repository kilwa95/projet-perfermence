import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError, startWith } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { combineEpics } from 'redux-observable';

// ACTION TYPES
const FETCH_COVID = 'FETCH_COVID';
const FETCH_COVID_PENDING = 'FETCH_COVID_PENDING';
const FETCH_COVID_REJECTED = 'FETCH_COVID_REJECTED';
const FETCH_COVID_FULFILLED = 'FETCH_COVID_FULFILLED';

// Action creators
export const fetchCovid = () => ({ type: FETCH_COVID });

export const fetchCOVIDPending = () => ({
	type: FETCH_COVID_PENDING
});
export const fetchCOVIDRejected = (payload) => ({
	type: FETCH_COVID_REJECTED,
	payload
});
export const fetchCOVIDFulfilled = (payload) => ({
	type: FETCH_COVID_FULFILLED,
	payload
});

const fetchCovidEpic = (action$) =>
	action$
		.pipe(
			ofType(FETCH_COVID),
			mergeMap((action) =>
				ajax({
					url: `https://coronavirus-19-api.herokuapp.com/countries`,
					method: 'GET'
				}).pipe(
					map((xhr) => fetchCOVIDFulfilled(xhr.response)),
					catchError((error) => of(fetchCOVIDRejected(error)))
				)
			)
		)
		.pipe(startWith(fetchCOVIDPending()));

export const ArticleEpic = combineEpics(fetchCovidEpic);

const initialState = {
	covid: [],
	sports: [],
	jeux: [],
	isFetching: false,
	error: null
};

export const articlesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COVID_PENDING:
			return {
				...state,
				isFetching: true,
				covid: initialState.covid
			};
		case FETCH_COVID_REJECTED:
			return {
				...state,
				isFetching: false,
				covid: initialState.covid,
				error: action.payload
			};
		case FETCH_COVID_FULFILLED:
			return { ...state, isFetching: false, covid: action.payload };

		default:
			return state;
	}
};
