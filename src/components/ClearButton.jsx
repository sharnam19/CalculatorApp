var React=require('react');

var ClearButton=React.createClass({
	render:function(){
		return(
			<div className="col-xs-3">
				<button className="btn btn-danger btn-raised" onClick={this.props.onClick}>C</button>
			</div>
		);
	}
});
module.exports=ClearButton;