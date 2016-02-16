'use strict';

var React = require('react');

var Input = React.createClass(
    {

        render() {

            return (
                <label>Input: <input type="text" valueLink={this.props.valueLink}/></label>
            );
        },
    }
);

module.exports = Input;
