define(['react', 'action/CommentActionCreators'], function (React, CommentActionCreators) {
    var CommentForm = React.createClass({
        onSubmit: function (e) {
            var textNode = this.refs.text;
            var text = textNode.value;

            textNode.value = '';

            CommentActionCreators.createComment({
                text: text
            });
        },

        render: function () {
            return (
                <div className='comment-form'>
                    <textarea ref='text' />
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
            );
        }
    });

    return CommentForm;
});