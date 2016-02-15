'use strict';

var React = require('react');
var List = require('../list-of-components/List.jsx');
var SortButton = require('./SortButton.jsx');
var _ = require('lodash');

var SortableList = React.createClass(
    {
        getInitialState: function () {
            return {
                order: "asc"
            };
        },
        handleClick: function () {
            var newState = this.state.order === "asc" ? "desc" : "asc";
            this.setState({
                order: newState
            });
        },
        render: function () {

            var sortedItems = _.orderBy(this.props.items, _.identity, this.state.order);

            return (
                <div>
                    <SortButton order={this.state.order} onClick={this.handleClick}/>
                    <List items={sortedItems}/>
                </div>
            );
        },
    }
);

module.exports = SortableList;
