'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var SortButton = React.createClass(
    {
        render()
        {
            var iconClass = "fa fa-sort-" + this.props.order;
            return (
                    <button onClick={this.props.onClick}> <i className={iconClass}></i>sort</button>
            );
        }
    }
);

module.exports = SortButton;
