var React = require('react');
var Index = require('./index');

var renderScript = function(data){
	return 'var initialData = ' + JSON.stringify(data) + ';';
};

var DefaultLayout = React.createClass({	
	
  render: function() {
    return (
		<html>
        <head>
			<title>{this.props.title}</title>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"/>
			<link rel="stylesheet" href="style.css"/>
			<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
			<script src="/socket.io/socket.io.js"></script>
			
			<script id="initialData" dangerouslySetInnerHTML={{__html:renderScript(this.props.data)}}/>
			<script src="/app.js"></script>
		</head>
        <body>
			<Index initialdata={this.props.data}/>
		</body>
		</html>
    );
  }
});

module.exports = DefaultLayout;


