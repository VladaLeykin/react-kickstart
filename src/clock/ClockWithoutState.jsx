'use strict';

var React = require('react');

var ClockWithoutState = React.createClass(
    {
        render()
        {
            var timeStr = 'Time is: ' +   new Date().toLocaleTimeString();

            return (
                <span>{timeStr}</span>
            );
        }
    }
);

module.exports = ClockWithoutState;
