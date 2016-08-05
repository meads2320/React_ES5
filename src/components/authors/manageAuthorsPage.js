var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorForm = require('./AuthorForm');
// controller view 

var ManageAuthorsPage = React.createClass({
    render : function() {
        return (
            <div className="container jumbotron">
                <div className="row">
                    <div className="col-md-3"> </div>
                        <div className="col-md-6"> 
                            <AuthorForm/>
                        </div>
                    <div className="col-md-3"> </div>
                </div>
            </div>
        );
    }
});

module.exports = ManageAuthorsPage;