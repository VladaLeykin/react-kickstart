'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var root = document.getElementById('props');

const A = React.createClass(
    {
        render()
        {
            return <B {...this.props} y={1}/>;
        }
    }
);

const B = React.createClass(
    {
        render()
        {
            return (<div>
                <p x={this.props.x}>Prop x = {this.props.x}</p>
                <p y={this.props.y}>Prop y = {this.props.y}</p>
            </div>);
        }
    }
);

var elem = <A x={2} y={4}/>;

//ReactDOM.render(elem, root);
