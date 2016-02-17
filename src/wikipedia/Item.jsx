'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass(
    {
        render : function()
        {
            return <li><a href={this.props.link}>{this.props.title}</a></li>
        }
    }
);

module.exports = Item;
