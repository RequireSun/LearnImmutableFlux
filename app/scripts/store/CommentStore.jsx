define(['dispatcher/appDispatcher', 'common/event'], function (AppDispatcher, Event) {
    var comments = [];

    var CommentStore = {
        emitChange: function() {
            Event.emit('commentStore.change');
        },

        addChangeListener: function(callback) {
            Event.on('commentStore.change', callback);
        },

        removeChangeListener: function(callback) {
            Event.off('commentStore.change', callback);
        },

        getAll: function() {
            return comments;
        }
    };

    AppDispatcher.register(function(action) {
        switch(action.actionType) {
            case 'CREATE_COMMENT':
                comments.push(action.comment);
                CommentStore.emitChange();
                break;
            case 'DELETE_COMMENT':
                comments.splice(action.number, 1);
                CommentStore.emitChange();
                break;
            default:
        }
    });

    return CommentStore;
});