'use strict';

var React = require('react');

var StyleComponent = React.createClass(
    {
        styleChange()
        {
            var isBold = this.refs.bold.checked;
            var isItalic = this.refs.italic.checked;
            this.props.updateStyle(isBold, isItalic);
        },
        render() {
            return (
                <div>
                    <label><input type="checkbox" ref="bold"  onChange={this.styleChange}/> Bold</label>
                    <label><input type="checkbox" ref="italic" onChange={this.styleChange}/> Italic</label>
                </div>
            );
        },
    }
);

module.exports = StyleComponent;
