var React = require('react');

var defaults = {
	'headertitle': 'Default Title',
	'headerdescription': 'Default Description',
	'backgroundimage': 'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?fit=crop&fm=jpg&q=80&w=1125'
};


var Header = React.createClass({
  render: function() {
	
	var data = defaults;
	
	for (var property in this.props.data){
		data[property] = this.props.data[property];
	}
	
	var headerStyle = {'backgroundImage': 'url(' + data.backgroundimage + ')'};
	
    return (
		<header style={headerStyle}>
		    <div className="header-content">
		        <div className="header-content-inner">
					<h1>{data.headertitle}</h1>
		            <p>{data.headerdescription}</p>
					{(data.headerlink && data.headerlinktext) ? <a href={data.headerlink} className="btn btn-primary btn-xl page-scroll">{data.headerlinktext}</a> : ''}
		        </div>
		    </div>
		</header>
    );
  }
});

module.exports = Header;