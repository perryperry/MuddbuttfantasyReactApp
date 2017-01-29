var React = require('react');

var Message = React.createClass({

	render() {
		return (
			<div className="container-fluid" >
				<div className="row" >
					<span>{this.props.message}</span> <br/>
				</div>
			</div>
		);
	}
});

module.exports = Message;