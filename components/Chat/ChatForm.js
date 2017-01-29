var React = require('react');

var ChatForm = React.createClass({

	sendMessage() {
		var message = React.findDOMNode(this.refs.message).value;
		this.props.emit('send-message', { msg: message, name: this.props.member.name});
		React.findDOMNode(this.refs.message).value = '';
	},

	render() {
		return (
			<div className="container-fluid" >
			<div className="row">
				<form action="javascript:void(0)" onSubmit={this.sendMessage}>
					<input ref="message"
						   className="form-control"
					       placeholder="Enter a message"
					       required />
					<button className="btn btn-primary">Send</button>
				</form>
			</div>
			</div>
		);
	}
});

module.exports = ChatForm;