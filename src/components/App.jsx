var React=require('react');

var EvaluateButton=require('./EvaluateButton.jsx');
var ClearButton=require('./ClearButton.jsx');
var GeneralButton=require('./GeneralButton.jsx');

var App=React.createClass({
	getInitialState:function(){
		return{
			value:""
		}
	},
	onClick:function(val,e){
		var val1=this.state.value;
		val1=val1+val;
		this.setState({value:val1});
	},
	onClear:function(e){
		this.setState({value:""});
	},
	onEvaluate:function(){
		var val=this.state.value;
		if(val.indexOf("+")!==-1 && val.indexOf("–")===-1 && val.indexOf("X")===-1 && val.indexOf("÷")===-1){
			var pos=val.indexOf("+");
			if(pos===0 || pos===val.length-1){
				this.setState({value:""});
			}else{
				var first=val.substring(0,pos);
				var second=val.substring(pos+1);
				var fN=parseInt(first);
				var sN=parseInt(second);
				this.setState({value:fN+sN});	
			}
			
		}else if(val.indexOf("+")===-1 && val.indexOf("–")!==-1 && val.indexOf("X")===-1 && val.indexOf("÷")===-1){
			var pos=val.indexOf("–");
			if(pos===0 || pos===val.length-1){
				this.setState({value:""});
			}else{
				var first=val.substring(0,pos);
				var second=val.substring(pos+1);
				var fN=parseInt(first);
				var sN=parseInt(second);
				this.setState({value:fN-sN});	
			}
		}else if(val.indexOf("+")===-1 && val.indexOf("–")===-1 && val.indexOf("X")!==-1 && val.indexOf("÷")===-1){
			var pos=val.indexOf("X");
			if(pos===0 || pos===val.length-1){
				this.setState({value:""});
			}else{
				var first=val.substring(0,pos);
				var second=val.substring(pos+1);
				var fN=parseInt(first);
				var sN=parseInt(second);
				this.setState({value:fN*sN});	
			}
		}else if(val.indexOf("+")===-1 && val.indexOf("–")===-1 && val.indexOf("X")===-1 && val.indexOf("÷")!==-1){
			var pos=val.indexOf("÷");
			if(pos===0 || pos===val.length-1){
				this.setState({value:""});
			}else{
				var first=val.substring(0,pos);
				var second=val.substring(pos+1);
				var fN=parseInt(first);
				var sN=parseInt(second);
				this.setState({value:fN/sN});	
			}
		}else{
			this.setState({value:""});
		}
	},
	render:function(){
		var centerText={};
		centerText.align="center";
		return(
			<div className="panel panel-primary">
				<div className="panel-body">	
					<div className="col-xs-12">
						<div className="form-group">
							<input type="text" className="form-control" value={this.state.value} disabled/>					
						</div>
					</div>
					<GeneralButton onClick={this.onClick.bind(this,"1")} value="1" />
					<GeneralButton onClick={this.onClick.bind(this,"2")} value="2" />
					<GeneralButton onClick={this.onClick.bind(this,"3")} value="3" />
					<GeneralButton onClick={this.onClick.bind(this,"+")} number={false} value="+" />
					<GeneralButton onClick={this.onClick.bind(this,"4")} value="4" />
					<GeneralButton onClick={this.onClick.bind(this,"5")} value="5" />
					<GeneralButton onClick={this.onClick.bind(this,"6")} value="6" />
					<GeneralButton onClick={this.onClick.bind(this,"–")}  number={false} value="–" />
					<GeneralButton onClick={this.onClick.bind(this,"7")} value="7" />
					<GeneralButton onClick={this.onClick.bind(this,"8")} value="8" />
					<GeneralButton onClick={this.onClick.bind(this,"9")} value="9" />
					<GeneralButton onClick={this.onClick.bind(this,"X")} number={false} value="X" />
					<ClearButton onClick={this.onClear} />
					<GeneralButton onClick={this.onClick.bind(this,"0")} value="0" />
					<EvaluateButton onClick={this.onEvaluate}/>
					<GeneralButton onClick={this.onClick.bind(this,"÷")} number={false} value="÷" />
				</div>
			</div>
		);	
	}	
});

module.exports=App;