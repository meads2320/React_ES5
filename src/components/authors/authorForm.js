var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var TextInput = require('../common/textInput');
// controller view 

var AuthorForm = React.createClass({
      propTypes: {
        onChange: React.PropTypes.func.isRequired, 
        onSave: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object,
        author: React.PropTypes.object.isRequired
    },
    render : function() {
        return (
            <form>
            <h1>Manage Authors</h1>
            <TextInput 
                name="firstName"
                label="First Name"
                value={this.props.author.firstName}
                onChange={this.props.onChange}
                error={this.props.errors.firstName} />

            <TextInput 
                name="lastName"
                label="Last Name"
                value={this.props.author.lastName}
                onChange={this.props.onChange}
                error={this.props.errors.lastName}  />
                < br/>
                <div className="form-group">
                    <input type="submit" className="btn btn-default" onClick={this.props.onSave} value="Save" />
                </div>
            </form>
        );
    }
});

module.exports = AuthorForm;