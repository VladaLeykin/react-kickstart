'use strict';

var React = require('react');

var InputComponent = React.createClass(
    {
        addTask(){
            var taskTitle = this.refs.taskText.value;
            if (taskTitle !== "")
            {
                this.props.addItem(taskTitle);
            }
        },
        render() {
            return (
                <label>Task:
                    <input type="text" ref="taskText"/>
                    <button onClick={this.addTask}>Add</button>
                </label>
            );
        },
    }
);

module.exports = InputComponent;
