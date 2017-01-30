var React = require('react');
import axios from 'axios';
var owner1Name = [];
var owner2Name = [];
var owner1Record = [];
var owner2Record = [];
var owner1Score = [];
var owner2Score = [];
var owners = {};

class Scoreboard extends React.Component {

	constructor(props) {
    	super(props);
 	}
 	componentDidMount() {
 		var i = 0;
	    axios.get(`http://localhost:3000/scoreboard`)
	      .then(res => {
	      		owners = res.data;
	      	for(var i = 0; i < 5; i ++ ) {
		      	owner1Name.push(res.data[i].opponent1.name);
				owner2Name.push(res.data[i].opponent2.name);
				owner1Record.push(res.data[i].opponent1.record);
				owner2Record.push(res.data[i].opponent2.record);
				owner2Score.push(res.data[i].opponent1.score);
				owner2Score.push(res.data[i].opponent2.score);
			 }	  
			 console.log(owner1Name);    	 
	      });
	 }

	render() {
		return (
			<div row>

				<table>
					<thead>
						<tr>
							<th>team</th>
							<th>record</th>
							<th>score</th>
							<th>team</th>
							<th>record</th>
							<th>score</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							
						</tr>
					
					</tbody>
				</table>
			</div>
		);
	}
}

module.exports = Scoreboard;