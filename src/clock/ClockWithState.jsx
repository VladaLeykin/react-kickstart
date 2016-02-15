'use strict';

var React = require('react');

var ClockWithState = React.createClass(
    {
        getInitialState: function () {
            var now = new Date();
            setInterval(this.tick, 1000);
            return {
                time: now.getTime()
            };
        },
        tick: function () {
            var now = new Date();

            this.setState({
                time: now.getTime()
            });
        },
        render()
        {
            var timeStr = 'Time is: ' +   new Date(this.state.time).toLocaleTimeString();

            return (
                <span>{timeStr}</span>
            );
        }
    }
);

module.exports = ClockWithState;
