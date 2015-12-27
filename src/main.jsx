var React = require('react');
var ReactDOM = require('react-dom');
var App=require('./components/App.jsx');
var Styles={
};
Styles.marginTop="20px";
ReactDOM.render(<div style={Styles}><App /></div>,document.getElementById('app'));