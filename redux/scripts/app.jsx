/**
 * Created by KelvinSen on 2016/1/4.
 */

'use strict';

requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        view: '../view',
        reducer: '../reducer',
        root: '..'
    }
});

requirejs([
    'react',
    'react-dom',
    'redux',
    'view/commentForm',
    'view/comments',
    'reducer/comment'
], function (
    React,
    ReactDOM,
    Redux,
    commentForm,
    comments,
    comment
) {
    console.log('success!');

    let store = Redux.createStore(Redux.combineReducers({ comment }));

    let Comments = comments('comments', store);
    let CommentForm = commentForm('commentForm', store);
});