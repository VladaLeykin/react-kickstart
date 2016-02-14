'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var root = document.getElementById('root');

var data = ['Hello', 'There', 'World', 'It\'s ex 3'];

//ex 3 option 1

//var args = []
//for (var i = 0; i < data.length; i++)
//{
//    args[i] = React.createElement('li', null, data[i]);
//}

//ex 3 option 2
var args = []
for (var i = 0; i < data.length; i++)
{
    args[i] = <li>{data[i]}</li>;
}

var div = <ul>{args}</ul>

ReactDOM.render(div, root);
