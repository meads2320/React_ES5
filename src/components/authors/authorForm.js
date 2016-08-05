var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// controller view 

var AuthorForm = React.createClass({
    render : function() {
        return (
            <form>
            <h1>Manage Authors</h1>
                <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" aria-describedby="firstNameHelp" placeholder="First Name" />
                  
                </div>
            <div className="form-group">
                    <label for="lasttName">First Name</label>
                    <input type="text" className="form-control" id="lastName" aria-describedby="lastNameHelp" placeholder="Last Name" />
                 
                </div>
                <div className="form-group">
                    <input type="submit" value="Save" className="btn btn-default pull-right" />
                </div>
            </form>
        );
    }
});

module.exports = AuthorForm;