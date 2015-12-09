define(['react', 'store/CommentStore'], function (React, CommentStore) {
    function getStateFromStore() {
        return {
            comments: CommentStore.getAll()
        }
    }

    class Comments extends React.Component {
        constructor (props) {
            super(props);
            this.state = getStateFromStore();
        }

        onChange () {
            this.setState(getStateFromStore());
        }

        //getInitialState () {
        //    return getStateFromStore();
        //}

        componentDidMount () {
            CommentStore.addChangeListener(this.onChange);
        }

        componentWillUnmount () {
            CommentStore.removeChangeListener(this.onChange);
        }

        render () {
            var comments = this.state.comments.map(function(comment, index) {
                return (
                    <div className='comment' key={'comment-' + index}>
                        {comment.text}
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