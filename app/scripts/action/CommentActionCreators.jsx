define(['react', 'dispatcher/appDispatcher'], function (React, AppDispatcher) {
    return {
        createComment: function (comment) {
            var action = {
                actionType: 'CREATE_COMMENT',
                comment: comment
            };

            AppDispatcher.dispatch(action);
        },
        deleteComment: function (number) {
            var action = {
                actionType: 'DELETE_COMMENT',
                number: number
            };

            AppDispatcher.dispatch(action);
        }
    };
});