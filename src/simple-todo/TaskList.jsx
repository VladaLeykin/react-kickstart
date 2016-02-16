'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Task = require('./Task.jsx');


var TaskList = React.createClass(
    {
        generateItem(key)
        {
            return <Task key={this.props.items[key].key}
                         index={this.props.items[key].key}
                         data={this.props.items[key]}
                         setItemStatus ={this.props.setItemStatus}/>;
        },
        render()
        {
            return <ul>{Object.keys(this.props.items).map(key => this.generateItem(key))}</ul>;
        }
    }
);

module.exports = TaskList;
