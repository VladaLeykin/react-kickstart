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
                    <p>Log In</p>
                    <span><Link to="/login/signup">SignUp</Link></span>
                </div>
            );
        },
    }
);

module.exports = LogIn;
