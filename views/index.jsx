var React = require('react');
var NavBar = require('./navbar.jsx');
var Header = require('./header.jsx');
var Services = require('./services.jsx');
var Portfolio = require('./portfolio.jsx');
var Contact = require('./contact.jsx');

var Index = React.createClass({  

  getInitialState: function(){
	return {data: this.props.initialdata}; 
  }, 

  componentDidMount: function(){
	var socket = io();
	var _this = this;
	socket.on('userUpdated', function(data){
		_this.setState({data: data});
	});
	
  },

  render: function() {
    return (
		<div id="index">
		<NavBar />
		<Header data={this.state.data} />
	    <Services data={this.state.data} />
		<Portfolio data={this.state.data} />
		<Contact data={this.state.data} />
		</div>
    );
  }
});


module.exports = Index;