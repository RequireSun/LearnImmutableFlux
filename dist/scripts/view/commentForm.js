define(['react', 'action/CommentActionCreators'], function (React, CommentActionCreators) {
    var CommentForm = React.createClass({displayName: "CommentForm",
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
                React.createElement("div", {className: "comment-form"}, 
                    React.createElement("textarea", {ref: "text"}), 
                    React.createElement("button", {onClick: this.onSubmit}, "Submit")
                )
            );
        }
    });

    return CommentForm;
});