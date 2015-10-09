var React = require('react');


var Service = React.createClass({
  render: function() {
		
    return (
		<div className="col-lg-3 col-md-6 text-center">
		    <div className="service-box">
		        <i className="fa fa-4x fa-diamond wow bounceIn text-primary"></i>
		        <h3>Service Name</h3>
		        <p className="text-muted">Service Description</p>
		    </div>
		</div>
    );
  }
});

module.exports = Service;







