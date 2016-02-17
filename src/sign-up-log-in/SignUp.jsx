'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var History = Router.History;

var SignUp = React.createClass(
    {
        mixins: [ History ],
        render: function () {

            return (
                <p>Hello</p>
            );
        },
    }
);

module.exports = SignUp;
