var React = require('react');
var ChatForm = require('./ChatForm');
var ChatWindow = require('./ChatWindow');

var ChatRoom = React.createClass({

	render() {
		return (
			<div if={this.props.status === 'connected'} className="container-fluid" >
				<div className="row " >
					<ChatWindow {...this.props} ></ChatWindow>
				</div>
				<div className="row " >
					<ChatForm emit={this.props.emit} {...this.props} className="col-xs-12" />
				</div>
			</div>
		);
	}
});

module.exports = ChatRoom;