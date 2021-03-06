'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./Item.jsx');


var TaskList = React.createClass(
    {
        generateItem(key)
        {
            var item = this.props.items[key];
            return <Item key={item.key}
                         index={item.key}
                         data={item}
                         setItemStatus ={this.props.setItemStatus}/>;
        },
        render()
        {
            return <ul>{Object.keys(this.props.items).reverse().map(key => this.generateItem(key))}</ul>;
        }
    }
);

module.exports = TaskList;
