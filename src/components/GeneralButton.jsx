var React=require('react');

var GeneralButton=React.createClass({
	propTypes: {
	    value:React.PropTypes.string.isRequired,
	    number:React.PropTypes.bool.isRequired
	},
	getDefaultProps: function() {
	    return {
	      number: true
	    };
	 },
	render:function(){
		var classes=this.props.number? "btn-primary":"btn-info";
		return(
			<div className="col-xs-3">
				<a className={"btn btn-raised "+classes} onClick={this.props.onClick}>{this.props.value}</a>
			</div>
		);
	}
});

module.exports=GeneralButton;