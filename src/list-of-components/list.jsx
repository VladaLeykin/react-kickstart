'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./Item.jsx');

var List = React.createClass(
    {
        render : function()
        {
            return <ul>{this.props.items.map(item => <Item data={item}/>)}</ul>;
        }
    }
);

module.exports = List;
