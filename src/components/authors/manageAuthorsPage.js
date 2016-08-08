var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorForm = require('./AuthorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');

var Router = require('react-router');
var toastr = require('toastr');
// controller view 
//this controller should interact with stores 
//holds data in state 

var ManageAuthorsPage = React.createClass({
    //defined as an array 
    mixins : [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom : function(transition, component) {
            if(component.state.dirty && !confirm('Leave without saving?')){
                transition.abort()
            }
        }
    },
    getInitialState: function() {
        return {
            author: { id: '', firstName: '', lastName : ''},
            errors: {},
            dirty:false
        };
    },
    componentWillMount : function()  {
        var authorId = this.props.params.id; // from path 'author:id'
        if(authorId) {
            this.setState({ author: AuthorStore.getAuthorById(authorId)});
        }
    },
    setAuthorState: function(event)  {
        this.setState( { dirty : true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author : this.state.author});
    },
    authorFormIsValid : function() {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors 

        if(this.state.author.firstName.length < 3) {
            this.state.errors.firstName = 'First name must be at least three characters';
            formIsValid = false;
        }
        if(this.state.author.lastName.length < 3) {
            this.state.errors.lastName = 'Last name must be at least three characters';
            formIsValid = false;
        }

        this.setState({ errors : this.state.errors });
        return formIsValid;
    },
    saveAuthor : function(event) { 
        event.preventDefault();
        if(!this.authorFormIsValid()) return;

        if(this.state.author.id)  AuthorActions.updateAuthor(this.state.author);
        else AuthorActions.createAuthor(this.state.author);

        toastr.success('Author saved sucessfully');
        this.setState( { dirty : false});
        this.transitionTo('authors');
    },
    render : function() {
        return (
            <div className="container jumbotron">
                <div className="row">
                    <div className="col-md-3"> </div>
                        <div className="col-md-6"> 
                            <AuthorForm 
                            author={this.state.author}
                            onChange={this.setAuthorState} 
                            onSave={this.saveAuthor} 
                            errors={this.state.errors} />
                        </div>
                    <div className="col-md-3"> </div>
                </div>
            </div>
        );
    }
});

module.exports = ManageAuthorsPage;