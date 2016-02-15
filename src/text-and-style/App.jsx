'use strict';

var React = require('react');
var InputComponent =  require('./InputComponent.jsx');
var StyleComponent =   require('./StyleComponent.jsx');
var Output =   require('./Output.jsx');

var App = React.createClass(
    {
        getInitialState: function () {
            return {
                text: "",
                style: {fontWeight: "normal", fontStyle: "normal"}
            };
        },
        updateText: function (newText) {
            this.setState({
                text: newText
            });
        },
        updateStyle: function (isBold, isItalic) {
            var newStyle = {}

            newStyle.fontWeight = isBold ? 'bold' : 'normal';
            newStyle.fontStyle = isItalic ? 'italic' : 'normal';

            this.setState({
                style: newStyle
            });
        },
        render: function () {

            return (
                <div>
                    <InputComponent updateText={this.updateText}/>
                    <StyleComponent updateStyle = {this.updateStyle}/>
                    <Output text={this.state.text} style={this.state.style}/>
                </div>
            );
        },
    }
);

module.exports = App;
