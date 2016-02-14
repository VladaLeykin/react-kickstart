'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list.jsx');

var items = ['This','is','demo','list'];

var root = document.getElementById('root');

var div = <List items={items} />;

ReactDOM.render(div, root);
