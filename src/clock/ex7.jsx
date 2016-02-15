'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ClockWithoutState =  require('./ClockWithoutState.jsx');

var root = document.getElementById('ex7');

var renderClock = function()
{
    ReactDOM.render( <ClockWithoutState />, root);
}

setInterval(renderClock, 1000);


