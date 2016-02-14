'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./item.jsx');

var List = React.createClass(
    {
        render : function()
        {
            return <ul>{this.props.items.map(i => <Item data={i}/>)}</ul>;
        }
    }
);

module.exports = List;
