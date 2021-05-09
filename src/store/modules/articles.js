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

const FETCH_BOOKS = 'FETCH_BOOKS';
const FETCH_BOOKS_PENDING = 'FETCH_BOOKS_PENDING';
const FETCH_BOOKS_REJECTED = 'FETCH_BOOKS_REJECTED';
const FETCH_BOOKS_FULFILLED = 'FETCH_BOOKS_FULFILLED';

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

export const fetchBook = () => ({ type: FETCH_BOOKS });

export const fetchBookPending = () => ({
	type: FETCH_BOOKS_PENDING
});
export const fetchBookRejected = (payload) => ({
	type: FETCH_BOOKS_REJECTED,
	payload
});
export const fetchBookFulfilled = (payload) => ({
	type: FETCH_BOOKS_FULFILLED,
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

const fetchBookEpic = (action$) =>
	action$
		.pipe(
			ofType(FETCH_BOOKS),
			mergeMap((action) =>
				ajax({
					url: `http://localhost:8000/api/books`,
					method: 'GET',
					headers: {
						accept: 'application/json'
					}
				}).pipe(
					map((xhr) => fetchBookFulfilled(xhr.response)),
					catchError((error) => of(fetchBookRejected(error)))
				)
			)
		)
		.pipe(startWith(fetchBookPending()));

export const ArticleEpic = combineEpics(fetchCovidEpic, fetchBookEpic);

const initialState = {
	covid: [],
	books: [],
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

		case FETCH_BOOKS_PENDING:
			return {
				...state,
				isFetching: true,
				books: initialState.books
			};
		case FETCH_BOOKS_REJECTED:
			return {
				...state,
				isFetching: false,
				books: initialState.books,
				error: action.payload
			};
		case FETCH_BOOKS_FULFILLED:
			return { ...state, isFetching: false, books: action.payload };

		default:
			return state;
	}
};
