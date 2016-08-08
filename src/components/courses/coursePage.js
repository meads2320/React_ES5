var React = require('react');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var CourseList = require('./courseList');
var Router = require('react-router');
var Link = Router.Link;

var CoursePage = React.createClass({
    getInitialState: function()  {
        return {
            courses: CourseStore.getAllCourses(),
        };
    },

    _onChange: function()  {
        this.setState({ courses: CourseStore.getAllCourses() });
    },
    componentWillMount : function() {
        CourseStore.addChangeListener(this._onChange);
    },
    componentWillUnMount : function() {
         CourseStore.removeChangeListener(this._onChange);
    },
    render: function()  {
        return ( 
            <div className="container jumbotron">
                <h1>Courses</h1>
                 <Link to="addCourse" className="btn btn-primary">+ Add Course</Link>
                <CourseList courses={this.state.courses} />
                
            </div>
        );
    }
});

module.exports = CoursePage;