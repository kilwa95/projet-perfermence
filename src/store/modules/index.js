import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { ArticleEpic, articlesReducer } from './articles.js';

export const rootEpic = combineEpics(ArticleEpic);
export const rootReducer = combineReducers({
	articles: articlesReducer
});
