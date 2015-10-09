var React = require('react');
var PortfolioItem = require('./portfolioitem.jsx')

var defaults = {
		portfoliocategory1: '',
		portfolioname1: '',
		portfoliocategory2: '',
		portfolioname2: '',
		portfoliocategory3: '',
		portfolioname3: '',
		portfoliocategory4: '',
		portfolioname4: '',
		portfoliocategory5: '',
		portfolioname5: '',
		portfoliocategory6: '',
		portfolioname6: ''
};


var Portfolio = React.createClass({
  render: function() {
	
	var data = defaults;
	
	for (var property in this.props.data){
		data[property] = this.props.data[property];
	}
	
    return (
		<section className="no-padding" id="portfolio">
		    <div className="container-fluid">
		        <div className="row no-gutter">
		            {data.portfolioimage1 ? <PortfolioItem image={data.portfolioimage1} category={data.portfoliocategory1} name={data.portfolioname1} /> : ''}
		            {data.portfolioimage2 ? <PortfolioItem image={data.portfolioimage2} category={data.portfoliocategory2} name={data.portfolioname2} /> : ''}
		            {data.portfolioimage3 ? <PortfolioItem image={data.portfolioimage3} category={data.portfoliocategory3} name={data.portfolioname3} /> : ''}
		            {data.portfolioimage4 ? <PortfolioItem image={data.portfolioimage4} category={data.portfoliocategory4} name={data.portfolioname4} /> : ''}
		            {data.portfolioimage5 ? <PortfolioItem image={data.portfolioimage5} category={data.portfoliocategory5} name={data.portfolioname5} /> : ''}
		            {data.portfolioimage6 ? <PortfolioItem image={data.portfolioimage6} category={data.portfoliocategory6} name={data.portfolioname6} /> : ''}
		        </div>
		    </div>
		</section>
    );
  }
});

module.exports = Portfolio;
