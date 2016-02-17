'use strict';

var React = require('react');
var List = require('./List.jsx');
var $ = require('jquery');
var _ = require('lodash');

var WikipediaSearch = React.createClass(
    {
        getInitialState: function () {
            return {
                articles: [],
                search: ""
            };
        },
        throttleUpdateSearch: _.throttle(function()
        {
            var query = encodeURIComponent(this.refs.query.value);
            var self = this;

            $.getJSON( 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + query +
                '&callback=?', function( data ) {
                self.setState({
                    articles: _.zip(data[1],data[3]),
                    search: query
                });
            });
        },1000),
        render: function () {
            return (
                <div>
                   <h2>Wikipedia Query</h2>
                    <input type="text" ref="query" onChange={this.throttleUpdateSearch}/>
                    <List articles={this.state.articles} search={this.state.search}/>
                </div>
            );
        },
    }
);

module.exports = WikipediaSearch;

