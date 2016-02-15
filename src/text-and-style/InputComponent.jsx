'use strict';

var React = require('react');

var InputComponent = React.createClass(
    {
        updateText(){
            this.props.updateText(this.refs.inputText.value);
        },
        render() {

            return (
                <label>Input: <input type="text" ref="inputText" onChange={this.updateText}/></label>
            );
        },
    }
);

module.exports = InputComponent;
