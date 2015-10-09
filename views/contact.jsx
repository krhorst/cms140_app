var React = require('react');


var Contact = React.createClass({
  render: function() {
		
    return (
		<section id="contact">
		    <div className="container">
		        <div className="row">
		            <div className="col-lg-8 col-lg-offset-2 text-center">
		                <h2 className="section-heading">{this.props.data && this.props.data.contactheading ? this.props.data.contactheading : 'Contact'}</h2>
		                <hr className="primary"/>
		                <p></p>
		            </div>
		            
		            {(this.props.data && this.props.data.phone && this.props.data.phone.length) ? <div className="col-lg-8 col-lg-offset-2 text-center"><i className="fa fa-phone fa-3x wow bounceIn"></i><p>{this.props.data.phone}</p></div> : ''}

					{(this.props.data && this.props.data.email && this.props.data.email.length) ? <div className="col-lg-8 col-lg-offset-2 text-center"><i className="fa fa-envelope fa-3x wow bounceIn"></i><p><a href={['mailto:',this.props.data.email]}>{this.props.data.email}</a></p></div> : ''}
		        </div>
		    </div>
		</section>

    );
  }
});

module.exports = Contact;

