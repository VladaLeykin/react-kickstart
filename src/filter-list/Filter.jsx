'use strict';

var React = require('react');

var Filter = React.createClass(
    {
        addTask(){
            var taskTitle = this.refs.taskText.value;
            if (taskTitle !== "")
            {
                this.props.addItem(taskTitle);
            }
        },
        onTextChange()
        {
            var taskTitle = this.refs.taskText.value;
            this.props.handleInputOnChange(taskTitle);
        },
        render() {
            return (
                <label>Filter:
                    <input type="text" ref="taskText" onChange = {this.onTextChange} />
                    <button onClick={this.addTask}>Add</button>
                </label>
            );
        }
    }
);

module.exports = Filter;
