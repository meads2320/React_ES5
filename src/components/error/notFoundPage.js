var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render : function() {
        return (
            <div className="container jumbotron">
                <h1>Page Not Found</h1>
                <p>Nothing to see here... </p>
                <br />
                <Link to="app" className="btn btn-primary btn-lg">Back to Home</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;