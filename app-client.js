import React from 'react'
import Router from 'react-router'
import APP from './components/APP'
import Audience from './components/Audience'
import Speaker from './components/Speaker'
import Board from './components/Board'
import Whoops404 from './components/Whoops404'
import ChatRoom from './components/Chat/ChatRoom'
var { Route, DefaultRoute, NotFoundRoute } = Router;

var routes = (
	<Route handler={APP}>
		<DefaultRoute handler={ChatRoom} />
		<Route name="speaker" path="speaker" handler={Speaker}></Route>
		<Route name="board" path="board" handler={Board}></Route>
		<NotFoundRoute handler={Whoops404} />
	</Route>
);

Router.run(routes, function(Handler) {
	React.render(<Handler />, document.getElementById('react-container'));
});