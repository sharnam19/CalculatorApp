var React=require('react');

var EvaluateButton=React.createClass({
	render:function(){
		return(
			<div className="col-xs-3">
				<button className="btn btn-success btn-raised" onClick={this.props.onClick}>=</button>
			</div>
		);
	}
});
module.exports=EvaluateButton;