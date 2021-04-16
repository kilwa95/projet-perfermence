import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { rootEpic, rootReducer } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware();
let middleWares = [ epicMiddleware ];

if (!process.env.NODE_ENV === 'production') {
	const loggerMiddleware = createLogger(); // default options
	middleWares.push(loggerMiddleware);
}

export default function configureStore(preloadedState = {}) {
	const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middleWares)));

	epicMiddleware.run(rootEpic);

	return store;
}
