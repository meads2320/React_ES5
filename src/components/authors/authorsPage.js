var React = require('react');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var Router = require('react-router');
var Link = Router.Link;

var AuthorPage = React.createClass({
    getInitialState: function()  {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    _onChange: function()  {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },
    componentWillMount : function() {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnMount : function() {
         AuthorStore.removeChangeListener(this._onChange);
    },
    render: function()  {
        return ( 
            <div className="container jumbotron">
                <h1>Authors</h1>
                 <Link to="addAuthor" className="btn btn-primary">+ Add Author</Link>
                <AuthorList authors={this.state.authors} />
                
            </div>
        );
    }
});

module.exports = AuthorPage;