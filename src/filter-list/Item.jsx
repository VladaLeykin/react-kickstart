'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass(
    {
        onButtonClick(){
            this.props.deleteItem(this.props.index);
        },
        render()
        {
            return <li onClick={this.onButtonClick}>
                <p>{this.props.data}</p>
                <button onClick = {this.onButtonClick}>Delete</button>
            </li>
        }
    }
);

module.exports = Item;
