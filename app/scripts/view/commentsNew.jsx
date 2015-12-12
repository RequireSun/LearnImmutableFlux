define(['react', 'common/event', 'store/commentStoreNew'], function (React, Event, CommentStore) {
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

        deleteComment (index) {
            Event.emit('dispatcher.deleteComment', index);
        }

        render () {
            var comments = this.state.comments.map((comment, index) => (
                    <div className='comment' key={'comment-' + index}>
                        {comment.text}
                        <button onClick={this.deleteComment.bind(null, index)}>x</button>
                    </div>
                )
            );

            return (
                <div className='comments'>
                    {comments}
                </div>
            )
        }
    }

    return Comments;
});