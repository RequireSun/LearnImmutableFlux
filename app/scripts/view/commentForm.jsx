define(['react', 'action/commentActionCreators'], function (React, CommentActionCreators) {
    class CommentForm extends React.Component {
        onSubmit (e) {
            var textNode = this.refs.text;
            var text = textNode.value;

            textNode.value = '';

            CommentActionCreators.createComment({
                text: text
            });
        }

        render () {
            return (
                <div className='comment-form'>
                    <textarea ref='text' />
                    <button onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
            );
        }
    }

    return CommentForm;
});