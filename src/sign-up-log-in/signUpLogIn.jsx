'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var History = ReactRouter.History;
var Link = Router.Link;

//app that serves as a container for sign in / up exercise
var SignInLogInApp = React.createClass(
    {

        render: function () {
            var content = this.props.children || "Nothing is here";
            return (
               <div>
                   <h1>Exercise 12: Signup / Login / Logout</h1>
                   {content}
               </div>
            );
        },
    }
);

module.exports = SignInLogInApp;

