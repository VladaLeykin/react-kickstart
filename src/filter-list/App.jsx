'use strict';

var React = require('react');
var Filter = require('./Filter.jsx');
var List = require('./List.jsx');
var shortid = require('shortid');
var _ = require('lodash');

var AppTodo = React.createClass(
    {
        getInitialState: function () {
            return {
                items: {},
                filter: ""
            };
        },
        addItem: function (newItemTitle) {
            var newKey = shortid.generate();
            this.state.items[newKey] = newItemTitle;
            this.setState({
                items: this.state.items
            });
        },
        deleteItem: function (key) {
            delete this.state.items[key];
            this.setState({
                items: this.state.items
            });
        },
        setNewFilter(newFilter)
        {
            this.setState({
                filter: newFilter
            });
        },
        render: function () {

            var filter = this.state.filter;
            var fullItemCollection = this.state.items;

            var keysToShow = _.chain(this.state.items).invert().filter(function (key) {
                return (fullItemCollection[key].startsWith(filter));
            }).value();

            var filteredItems = _.pick(fullItemCollection, keysToShow);

            return (
                <div>
                    <Filter addItem={this.addItem} handleInputOnChange={this.setNewFilter}/>
                    <List items={filteredItems} deleteItem={this.deleteItem}/>
                </div>
            );
        }
    }
);

module.exports = AppTodo;

