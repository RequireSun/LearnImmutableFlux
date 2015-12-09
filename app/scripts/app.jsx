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

    class App extends React.Component {
        render () {
            return (
                <div>
                    <Comments />
                    <CommentForm />
                </div>
            );
        }
    }

    ReactDOM.render(<App />, document.getElementById('content'));
});