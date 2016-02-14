'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass(
    {
        render : function()
        {
            return <li>{this.props.data}</li>
        }
    }
);

module.exports = Item;
