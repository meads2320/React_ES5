var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseForm = require('./CourseForm');
var CourseActions = require('../../actions/courseActions');
var AuthorStore = require('../../stores/authorStore');
var CourseStore = require('../../stores/courseStore');

var Router = require('react-router');
var toastr = require('toastr');
// controller view 
//this controller should interact with stores 
//holds data in state 

var ManageCoursePage = React.createClass({
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
            authors: AuthorStore.getAllAuthors(),
            course: {  
			id: '',
			title: '',
			watchHref: '',
			author: {  
				id: '',
				name: ''
			},
			length: '',
			category: ''
		},
            errors: {},
            dirty:false
        };
    },
    componentWillMount : function()  {
        var courseId = this.props.params.id; // from path 'courseId:id'
        if(courseId) {
            this.setState({ course: CourseStore.getCourseById(courseId)});
        }
    },
    setCourseState: function(event)  {
        this.setState( { dirty : true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({ course : this.state.course});
    },
    courseFormIsValid : function() {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors 

        if(this.state.course.title.length < 3) {
            this.state.errors.title = 'Title must be at least three characters';
            formIsValid = false;
        }
        if(this.state.course.category.length < 3) {
            this.state.errors.category = 'Category must be at least three characters';
            formIsValid = false;
        }
         if(this.state.course.courseLength.length < 3) {
            this.state.errors.lastName = 'Length must be at least three characters';
            formIsValid = false;
        }

        this.setState({ errors : this.state.errors });
        return formIsValid;
    },
    saveCourse : function(event) { 
        event.preventDefault();
        if(!this.courseFormIsValid()) return;

        if(this.state.course.id)  CourseActions.updateCourse(this.state.course);
        else CourseActions.createCourse(this.state.course);

        toastr.success('Course saved sucessfully');
        this.setState( { dirty : false});
        this.transitionTo('courses');
    },
    render : function() {
        return (
            <div className="container jumbotron">
                <div className="row">
                    <div className="col-md-3"> </div>
                        <div className="col-md-6"> 
                            <CourseForm 
                            authors={this.state.authors}
                            course={this.state.course}
                            onChange={this.setCourseState} 
                            onSave={this.saveCourse} 
                            errors={this.state.errors} />
                        </div>
                    <div className="col-md-3"> </div>
                </div>
            </div>
        );
    }
});

module.exports = ManageCoursePage;