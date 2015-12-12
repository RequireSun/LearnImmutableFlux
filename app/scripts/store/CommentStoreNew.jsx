define(['common/event'], function (Event) {
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

    Event.on('dispatcher.createComment', function (comment) {
        comments.push(comment);
        CommentStore.emitChange();
    });
    Event.on('dispatcher.deleteComment', function (number) {
        comments.splice(number, 1);
        CommentStore.emitChange();
    });

    return CommentStore;
});