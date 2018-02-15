import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import IndexPage from './containers/IndexPage';
import ResultPage from './containers/ResultPage';

export default(
		<Route path="/" component={App}>
			<IndexRoute component={IndexPage} />
			<Route path="/result" component={ResultPage} />
		</Route>
);