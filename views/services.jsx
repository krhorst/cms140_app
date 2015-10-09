var React = require('react');
var Service = require('./service.jsx');

var Services = React.createClass({
  render: function() {
	
	
    return (
		<div className="container">
		            <div className="row">
						<Service />
						<Service />
						<Service />
						<Service />
		            </div>
		        </div>
    );
  }
});

module.exports = Services;


