'use strict';
define(['react', 'common/event'], function (React, Event) {
    class CommentForm extends React.Component {
        onSubmit (e) {
            let textNode = this.refs.text,
                text = textNode.value;

            textNode.value = '';

            Event.emit('dispatcher.createComment', { text: text, time: new Date });
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

    return CommentForm;
});