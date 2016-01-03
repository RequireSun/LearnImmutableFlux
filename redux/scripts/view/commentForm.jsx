'use strict';
define(['react', 'react-dom'], function (React, ReactDOM) {
    return function (targetId, store) {
        if (!targetId || !document.getElementById(targetId) || !store) {
            return null;
        }

        class CommentForm extends React.Component {
            onSubmit (e) {
                let textNode = this.refs.text,
                    text = textNode.value;

                textNode.value = '';

                store.dispatch({
                    type: 'ADD_COMMENT',
                    text: text,
                    time: new Date
                });
            }

            render () {
                return (
                    <div className='comment-form'>
                        <textarea ref='text'/>
                        <button onClick={this.onSubmit.bind(this)}>Submit</button>
                    </div>
                );
            }
        }

        return ReactDOM.render(<CommentForm />, document.getElementById(targetId));
    }
});