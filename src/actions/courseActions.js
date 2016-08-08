
var Dispatcher =  require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var CourseApi = require('../api/CourseApi');

var CourseActions = {
    createCourse : function(course) {
        var newCourse = CourseApi.saveCourse(course);

        //Notifies dispatcher to let all stores that an course has been created 
        Dispatcher.dispatch({
            actionType : ActionTypes.CREATE_COURSE,
            course : newCourse
        });
    },
     updateCourse : function(course) {
        var existingCourse = CourseApi.saveCourse(course);

        //Notifies dispatcher to let all stores that an course has been created 
        Dispatcher.dispatch({
            actionType : ActionTypes.UPDATE_COURSE,
            course : existingCourse
        });
    },
     deleteCourse : function(courseId) {
        var existingCourse = CourseApi.deleteCourse(courseId);

        //Notifies dispatcher to let all stores that an course has been created 
        Dispatcher.dispatch({
            actionType : ActionTypes.DELETE_COURSE,
            id : courseId
        });
    }
};

module.exports = CourseActions;