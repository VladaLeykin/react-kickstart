'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var History = Router.History;

var LoggedIn = React.createClass(
    {
        mixins: [ History ],
        render: function () {

            return (
                <p>Logged In</p>
            );
        },
    }
);

module.exports = LoggedIn;
