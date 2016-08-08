var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var TextInput = require('../common/textInput');
var SelectDropdown = require('../common/selectDropdown');
var AuthorStore = require('../../stores/authorStore');
// controller view 

var CourseForm = React.createClass({
      propTypes: {
        onChange: React.PropTypes.func.isRequired, 
        onSave: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object,
        course: React.PropTypes.object.isRequired
    },
    
    render : function() {

         var createAuthorOptions = function(author) { 
            return (
                <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>
            );
        };

        return (
            <form>
            <h1>Manage Courses</h1>
            <TextInput 
                name="title"
                label="Title"
                value={this.props.course.title}
                onChange={this.props.onChange}
                error={this.props.errors.title} />

            <SelectDropdown className="form-control" 
                        name="author"
                        label="Author" 
                        onChange={this.props.onChange}
                        placeholder={this.props.placeholder} 
                        value={this.props.course.author.id} 
                        initializer={this.props.authors.map(createAuthorOptions, this)}>
                         
            </SelectDropdown>

            <TextInput 
                name="category"
                label="Category"
                value={this.props.course.category}
                onChange={this.props.onChange}
                error={this.props.errors.category} />

                 <TextInput 
                name="courseLength"
                label="Length"
                value={this.props.course.courseLength}
                onChange={this.props.onChange}
                error={this.props.errors.length} />


                < br/>
                <div className="form-group">
                    <input type="submit" className="btn btn-default" onClick={this.props.onSave} value="Save" />
                </div>
            </form>
        );
    }
});

module.exports = CourseForm;