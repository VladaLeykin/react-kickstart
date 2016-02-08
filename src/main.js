'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var root = document.getElementById('root');

var div = React.createElement('div', null, 'Hello there world!');

ReactDOM.render(div, root);
