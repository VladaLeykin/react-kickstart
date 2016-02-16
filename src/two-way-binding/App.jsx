'use strict';

var React = require('react');
var Input = require('./Input.jsx');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var App = React.createClass(
    {
        mixins: [LinkedStateMixin],
        getInitialState: function () {
            return {
                number: 0
            };
        },
        updateText: function (newText) {
            this.setState({
                number: newText
            });
        },
        render: function () {
            return (
                <div>
                    <Input valueLink={this.linkState('number')}/>
                    <output name="result">{this.state.number * 2}</output>
                </div>
            );
        }
    }
);

module.exports = App;

