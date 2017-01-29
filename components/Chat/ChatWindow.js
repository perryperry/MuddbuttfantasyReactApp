var React = require('react');
var Message = require('./Message');

class ChatWindow extends React.Component {

	render() {
		return (
			<div className="container-fluid" >
				<h1>{this.props.messages.map(function(msg){
    					return <Message message={msg}></Message>
				})}</h1>
			</div>
		);
	}
}

module.exports = ChatWindow;