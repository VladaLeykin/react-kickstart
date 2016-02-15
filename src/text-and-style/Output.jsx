'use strict';

var React = require('react');

var Output = React.createClass(
    {
        render: function () {
            return (
                <output name="result" value={this.props.text} style={this.props.style}></output>
            );
        },
    }
);

module.exports = Output;
