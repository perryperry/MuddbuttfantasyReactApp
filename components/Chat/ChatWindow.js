var React = require('react');
var Message = require('./Message');
var Scoreboard = require('../Fantasy/Scoreboard');

class ChatWindow extends React.Component {	
	render() {
		return (
			<div className="container-fluid" >
				<Scoreboard></Scoreboard>
				<h1>{this.props.messages.map(function(msg){
    					return <Message message={msg}></Message>
				})}</h1>
			</div>
		);
	}
}

module.exports = ChatWindow;