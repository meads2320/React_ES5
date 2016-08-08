var React = require('react');
var Router = require('react-router');
var CourseActions = require('../../actions/CourseActions');
var toastr = require('toastr');
var Link = Router.Link;


var CourseList = React.createClass({
  
  propTypes : {
      courses : React.PropTypes.array.isRequired
  },

  deleteCourse :function(id) { 
      event.preventDefault();
      CourseActions.deleteCourse(id);
      toastr.success('Course Deleted');
  },

  render: function()  {

        var createCourseRow = function(course) { 
            return (
                <tr key={course.id}>
                 <td><a href={course.watchHref} target="_blank" >Watch</a></td>
                  <td><a href="" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
                    <td><Link to="manageCourse" params={{id: course.id }}>{course.title}</Link></td>
                     <td>{course.author}</td>
                     <td>{course.category}</td>
                      <td>{course.courseLength}</td>
                </tr>
            );
        };

        return ( 
            <div>
                <table className="table">
                    <thead>
                        <th>Watch</th>
                        <th>Delete</th>
                         <th>Author</th>
                         <th>Category</th>
                         <th>Course Length</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CourseList;