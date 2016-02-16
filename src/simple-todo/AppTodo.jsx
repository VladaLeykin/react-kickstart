'use strict';

var React = require('react');
var Input =  require('./Input.jsx');
var TaskList =   require('./TaskList.jsx');
var shortid = require('shortid');

var AppTodo = React.createClass(
    {
        getInitialState: function () {
            return {
                tasks: {}
            };
        },
        addItem: function (newItemTitle) {
            var newKey = shortid.generate();
            this.state.tasks[newKey] = {key:newKey, title: newItemTitle, done: false};
            this.setState({
                tasks: this.state.tasks
            });
        },
        setItemStatus: function(key, isDone)
        {
            this.state.tasks[key].done = isDone;
            this.setState({
                tasks: this.state.tasks
            });
        },
        render: function () {

            return (
                <div>
                    <Input addItem={this.addItem}/>
                    <TaskList items = {this.state.tasks} setItemStatus={this.setItemStatus}/>
                </div>
            );
        },
    }
);

module.exports = AppTodo;

