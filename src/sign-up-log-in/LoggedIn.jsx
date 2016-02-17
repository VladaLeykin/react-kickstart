'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

var LoggedIn = React.createClass(
    {
        render: function () {
            return (
                <div>
                    <span>You've successfully logged in</span>
                    <Link to="/login">Log Out</Link>
                </div>
            );
        },
    }
);

module.exports = LoggedIn;
