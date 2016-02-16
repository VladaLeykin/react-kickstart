'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./Item.jsx');

var List = React.createClass(
    {
        render()
        {
            var deleteFunc = this.props.deleteItem;
            var items = [];
            _.forOwn(this.props.items, function(value, key) {
                items.push(<Item key={key}
                                 index={key}
                                 deleteItem = {deleteFunc}
                                 data={value}/>)
            });


            return <ul>{items}</ul>;
        }
    }
);

module.exports = List;
