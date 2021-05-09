import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './views/Home/HomeContainer';

class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense>
					<Switch>
						<Route exact path="/" name="Home" render={(props) => <HomeContainer {...props} />} />
						<Route path="/login" name="login" component={HomeContainer} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
