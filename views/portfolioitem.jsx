var React = require('react');


var PortfolioItem = React.createClass({
  render: function() {
	
	
    return (
		<div className="col-lg-4 col-sm-6">
		    <a href="#" className="portfolio-box">
		        <img src={this.props.image} className="img-responsive" alt=""/>
		        <div className="portfolio-box-caption">
		            <div className="portfolio-box-caption-content">
		                <div className="project-category text-faded">
		                    {this.props.category}
		                </div>
		                <div className="project-name">
							{this.props.name}
		                </div>
		            </div>
		        </div>
		    </a>
		</div>
    );
  }
});

module.exports = PortfolioItem;



