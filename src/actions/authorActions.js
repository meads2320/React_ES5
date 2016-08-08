
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
    }
};

module.exports = AuthorActions;