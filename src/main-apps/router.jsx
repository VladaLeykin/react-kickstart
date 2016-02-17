'use strict';
import {  IndexRoute } from 'react-router'

var React = require('react');
var ReactDOM = require('react-dom');
var Exercises = require('./Exercises.jsx');
var SignUp = require('../sign-up-log-in/SignUp.jsx');
var SignUpLogInApp = require('../sign-up-log-in/SignUpLogIn.jsx');
var LoggedIn = require('../sign-up-log-in/LoggedIn.jsx');
var LogIn = require('../sign-up-log-in/LogIn.jsx');
var WikipediaSearch = require('../wikipedia/wikipedia.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;


var root = document.getElementById('root');

var keyValueStorage = {
    save(key, value)
    {
        localStorage.setItem(key,value);
    },
    remove(key)
    {
        localStorage.removeItem(key);
    },
    get(key)
    {
        return localStorage.getItem(key);
    },
    hasKey(key)
    {
        var value = localStorage.getItem(key);
        return (value !== null &&  value !== undefined);
    }
}

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>React week</h1>
                <ul>
                    <li><Link to="/exercises">Exercises</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/wikipedia">Wikipedia</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});

var routes = (
    <Router>
        <Route path="/" component={App}>
            <Route path="/exercises" component={Exercises}/>
            <Route path="/login" component={SignUpLogInApp}>
                <IndexRoute storage={keyValueStorage} component={LogIn}/>
                <Route path="signup" storage={keyValueStorage} component={SignUp}/>
                <Route path="loggedin" storage={keyValueStorage}  component={LoggedIn}/>
            </Route>
            <Route path="/wikipedia"  component={WikipediaSearch}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, root);
