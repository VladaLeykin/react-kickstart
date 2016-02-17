'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass(
    {
        render : function()
        {
            var markedLength = this.props.search.length;
            var markedText =  this.props.title.substring(0, markedLength);
            var notMarkedText = this.props.title.substring(markedLength);
            return <li><a href={this.props.link}><mark>{markedText}</mark>{notMarkedText}</a></li>
        }
    }
);

module.exports = Item;
