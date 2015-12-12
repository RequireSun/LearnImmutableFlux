'use strict';
define(['immutable' , 'common/event'], function (Immutable, Event) {
    let store = Immutable.Map();
    store = store.set('comments', Immutable.List());

    let CommentStore = {
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
            return store;
        }
    };

    Event.on('dispatcher.createComment', function (comment) {
        let comments = store.get('comments').push(Immutable.Map(comment));
        store = store.set('comments', comments);
        CommentStore.emitChange();
    });
    Event.on('dispatcher.deleteComment', function (number) {
        let comments = store.get('comments').delete(number);
        store = store.set('comments', comments);
        CommentStore.emitChange();
    });

    return CommentStore;
});