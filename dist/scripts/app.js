/**
 * Created by kelvinsun on 2015/12/9.
 */
'use strict';

requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        action: '../action',
        dispatcher: '../dispatcher',
        view: '../view',
        store: '../store',
        common: '../common',
        root: '..'
    }
});

requirejs(['react', 'react-dom', 'jquery', 'flux', 'view/commentForm', 'view/comments'], function (React, ReactDOM, jquery, Flux, CommentForm, Comments) {
    console.log('success!');

    var ____Classa=React.Component;for(var ____Classa____Key in ____Classa){if(____Classa.hasOwnProperty(____Classa____Key)){App[____Classa____Key]=____Classa[____Classa____Key];}}var ____SuperProtoOf____Classa=____Classa===null?null:____Classa.prototype;App.prototype=Object.create(____SuperProtoOf____Classa);App.prototype.constructor=App;App.__superConstructor__=____Classa;function App(){if(____Classa!==null){____Classa.apply(this,arguments);}}
        Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function( ) {
            return (
                React.createElement("div", null, 
                    React.createElement(Comments, null), 
                    React.createElement(CommentForm, null)
                )
            );
        }});
    

    ReactDOM.render(React.createElement(App, null), document.getElementById('content'));
});