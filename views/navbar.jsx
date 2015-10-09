var React = require('react');

var NavBar = React.createClass({
  render: function() {
    return (
		<nav id="mainNav" className="navbar navbar-default navbar-fixed-top affix-top">
		    <div className="container-fluid">
		        <div className="navbar-header">
		            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
		                <span className="sr-only">Toggle navigation</span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		            </button>
		            <a className="navbar-brand page-scroll" href="#page-top">Home</a>
		        </div>
		        <div className="collapse navbar-collapse" id="navbar-collapse-1">
		            <ul className="nav navbar-nav navbar-right">
		                <li>
		                    <a className="page-scroll" href="#about">About</a>
		                </li>
		                <li>
		                    <a className="page-scroll" href="#services">Services</a>
		                </li>
		                <li>
		                    <a className="page-scroll" href="#portfolio">Portfolio</a>
		                </li>
		                <li>
		                    <a className="page-scroll" href="#contact">Contact</a>
		                </li>
		            </ul>
		        </div>
		    </div>
		</nav>
    );
  }
});

module.exports = NavBar;

