import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home.js';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense>
					<Switch>
						<Route exact path="/" name="Home" component={Home} />
						<Route exact path="/login" name="login" component={Home} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
