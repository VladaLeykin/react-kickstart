'use strict';

var React = require('react');

var ClockWithState = React.createClass(
    {
        getInitialState: function () {
            var now = new Date();
            var id = setInterval(this.tick, 1000);
            return {
                time: now.getTime(),
                intervalId: id
            };
        },
        tick: function () {
            var now = new Date();

            this.setState({
                time: now.getTime()
            });
        },
        componentWillUnmount()
        {
            clearInterval(this.state.intervalId);
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
