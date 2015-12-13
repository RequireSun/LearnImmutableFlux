/**
 * Created by kelvinsun on 2015/12/9.
 */
'use strict';

requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        view: '../view',
        store: '../store',
        common: '../common',
        root: '..'
    }
});

requirejs(['react', 'react-dom', 'view/commentFormNew', 'view/commentsNew'], function (React, ReactDOM, CommentForm, Comments) {
    console.log('success!');

    class App extends React.Component {
        render () {
            return (
                <div>
                    <Comments/>
                    <CommentForm/>
                </div>
            );
        }
    }

    ReactDOM.render(<App/>, document.getElementById('content'));
});