define(['react', 'dispatcher/AppDispatcher'], function (React, AppDispatcher) {
    var CommentActionCreators = {
        createComment: function (comment) {
            var action = {
                actionType: 'CREATE_COMMENT',
                comment: comment
            };

            AppDispatcher.dispatch(action);
        }
    };

    return CommentActionCreators;
});