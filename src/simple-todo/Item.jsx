'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass(
    {
        onButtonClick(){
            this.props.setItemStatus(this.props.index, !this.props.data.done);
        },
        render()
        {
            var styleObj;
            styleObj =  (this.props.data.done)? {textDecoration: "line-through"} : {textDecoration: "none"};

            return <li  style={styleObj} onClick={this.onButtonClick}>{this.props.data.title}</li>
        }
    }
);

module.exports = Item;
