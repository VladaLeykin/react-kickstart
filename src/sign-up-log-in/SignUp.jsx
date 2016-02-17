'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var History = Router.History;
var Link = ReactRouter.Link;

var SignUp = React.createClass(
    {
        render: function () {

            return (
                <div>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Repeat Password"/>
                    <span>Already signed up?</span>
                    <Link to="/login">Log In</Link>
                </div>
            );
        },
    }
);

module.exports = SignUp;
