'use strict';


var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

var LogIn = React.createClass(
    {
        render: function () {

            return (
                <div>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <span>Don't have an account?</span>
                    <Link to="/login/signup">SignUp</Link>
                </div>
            );
        },
    }
);

module.exports = LogIn;
