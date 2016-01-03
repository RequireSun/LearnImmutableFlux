/**
 * Created by KelvinSen on 2016/1/4.
 */
'use strict';
define(['redux', 'immutable'], function (Redux, Immutable) {
    return function add (state = Immutable.List(), action) {
        switch (action.type) {
            case 'ADD_COMMENT':
                //return state.concat([{text: action.text, time: action.time}]);
                return state.push(Immutable.Map({text: action.text, time: action.time}));
            case 'REMOVE_COMMENT':
                //return state.slice(0, action.number).concat(state.slice(action.number + 1));
                return state.delete(action.number);
            case 'EDIT_COMMENT':
                return state.set(action.number, Immutable.Map({text: action.text, time: action.time}));
            default:
                return state;
        }
    }
});