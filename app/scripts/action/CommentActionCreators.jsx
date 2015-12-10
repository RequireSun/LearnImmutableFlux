define(['react', 'dispatcher/appDispatcher'], function (React, AppDispatcher) {
    return {
        createComment: function (comment) {
            var action = {
                actionType: 'CREATE_COMMENT',
                comment: comment
            };

            AppDispatcher.dispatch(action);
        }
    };
});