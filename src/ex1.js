
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var root = document.getElementById('root');

var div = React.createElement('ul', null,
    React.createElement('li', null, 'Hello'),
    React.createElement('li', null, 'There'),
    React.createElement('li', null, 'World'));


ReactDOM.render(div, root);

