import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Div from './Component/Div.js';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense>
					<Switch>
						<Route exact path="/" name="Home" component={Div} />
						<Route exact path="/login" name="Home" component={Div} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
