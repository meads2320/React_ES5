
var Dispatcher =  require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/AuthorApi');
var AuthorActions = {
    createAuthor : function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        //Notifies dispatcher to let all stores that an author has been created 
        Dispatcher.dispatch({
            actionType : ActionTypes.CREATE_AUTHOR,
            author : newAuthor
        });
    },
     updateAuthor : function(author) {
        var existingAuthor = AuthorApi.saveAuthor(author);

        //Notifies dispatcher to let all stores that an author has been created 
        Dispatcher.dispatch({
            actionType : ActionTypes.UPDATE_AUTHOR,
            author : existingAuthor
        });
    },
     deleteAuthor : function(authorId) {
        var existingAuthor = AuthorApi.deleteAuthor(authorId);

        //Notifies dispatcher to let all stores that an author has been created 
        Dispatcher.dispatch({
            actionType : ActionTypes.DELETE_AUTHOR,
            id : authorId
        });
    }
};

module.exports = AuthorActions;