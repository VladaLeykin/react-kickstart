'use strict';

var React = require('react');
var ClockWithState =  require('../clock/ClockWithState.jsx');
var AppTodo = require('../simple-todo/AppTodo.jsx');

var Exercises = React.createClass(
    {
        render: function () {

            return (
               <div>
                   <h1>React Exercices</h1>
                   <h2>Exercise 11 - Use LinkedStateMixin</h2>
                   <div id="ex11"></div>
                   <h2>Exercise 10 - Filtered Extensible List</h2>
                   <div id="ex10"></div>
                   <h2>Exercise 9 - Simple Todo</h2>
                   <AppTodo />
                   <h2>Exercise 8 - Update text and style</h2>
                   <div id="ex8"></div>
                   <h2>Exercise 7 - Clock without state</h2>
                   <div id="ex7"></div>
                   <h2>Exercise 6 - Simple clock</h2>
                   <ClockWithState />
                   <h2>Exercise 5 - Sortable list</h2>
                   <div id="ex5"></div>
                   <h2>Exercise 4</h2>
                   <div id="ex4"></div>
                   <h2>Exercise props</h2>
                   <div id="props"></div>
                   <h2>Exercise 3</h2>
                   <div id="ex3"></div>
                   <h2>Exercise 2</h2>
                   <div id="ex2"></div>
                   <h2>Exercise 1</h2>
                   <div id="ex1"></div>
               </div>
            );
        },
    }
);

module.exports = Exercises;

