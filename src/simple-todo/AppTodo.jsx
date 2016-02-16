'use strict';

var React = require('react');
var Input =  require('./Input.jsx');
var TaskList =   require('./TaskList.jsx');
var shortid = require('shortid');

var AppTodo = React.createClass(
    {
        getInitialState: function () {
            return {
                items: {}
            };
        },
        addItem: function (newItemTitle) {
            var newKey = shortid.generate();
            this.state.items[newKey] = {key:newKey, title: newItemTitle, done: false};
            this.setState({
                items: this.state.items
            });
        },
        setItemStatus: function(key, isDone)
        {
            this.state.items[key].done = isDone;
            this.setState({
                items: this.state.items
            });
        },
        render: function () {

            return (
                <div>
                    <Input addItem={this.addItem}/>
                    <TaskList items = {this.state.items} setItemStatus={this.setItemStatus}/>
                </div>
            );
        },
    }
);

module.exports = AppTodo;

