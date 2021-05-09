import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './views/Home/HomeContainer';
import BookContainer from './views/Book/BookContainer';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense>
					<Switch>
						<Route exact path="/" name="Home" render={(props) => <HomeContainer {...props} />} />
						<Route path="/book" name="book" render={(props) => <BookContainer {...props} />} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
