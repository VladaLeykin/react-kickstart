'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./Item.jsx');
var shortid = require('shortid');

var List = React.createClass(
    {
        render : function()
        {
            return <ul>{this.props.articles.map(item => <Item key={shortid.generate()} search={this.props.search} title={item[0]} link={item[1]}/>)}</ul>;
        }
    }
);

module.exports = List;
