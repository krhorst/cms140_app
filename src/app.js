
var React = require('react');
var MainView = require('../views/index.jsx');

document.addEventListener('DOMContentLoaded', function(){ 
  return React.render(<MainView initialdata={initialData}/>, document.body);
}, false);
