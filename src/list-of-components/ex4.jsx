'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./List.jsx');

var items = ['This','is','demo','item',"ssss"];

var root = document.getElementById('ex4');

var div = <List items={items} />;

ReactDOM.render(div, root);
