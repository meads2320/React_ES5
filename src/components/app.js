$ = jQuery = require('jquery');

var React = require('react');
var Header =  require('./common/header');
var RouteHandler =  require('react-router').RouteHandler;

var App = React.createClass({
    render: function() { 
        return (
            <div className="container">
                <Header />
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;