define(['react', 'store/commentStore', 'action/commentActionCreators'], function (React, CommentStore, CommentActionCreators) {
    function getStateFromStore() {
        return {
            comments: CommentStore.getAll()
        }
    }

    class Comments extends React.Component {
        constructor (props, context) {
            super(props, context);
            this.state = getStateFromStore();
        }

        onChange () {
            this.setState(getStateFromStore());
        }

        componentDidMount () {
            CommentStore.addChangeListener(this.onChange.bind(this));
        }

        componentWillUnmount () {
            CommentStore.removeChangeListener(this.onChange.bind(this));
        }

        render () {
            var comments = this.state.comments.map(function(comment, index) {
                return (
                    <div className='comment' key={'comment-' + index}>
                        {comment.text}
                        <button onClick={CommentActionCreators.deleteComment.bind(null, index)}>x</button>
                    </div>
                );
            });

            return (
                <div className='comments'>
                    {comments}
                </div>
            )
        }
    }

    return Comments;
});