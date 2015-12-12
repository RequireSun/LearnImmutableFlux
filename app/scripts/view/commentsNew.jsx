'use strict';
define(['react', 'immutable', 'common/event', 'store/commentStoreNew'], function (React, Immutable, Event, CommentStore) {
    function getStateFromStore() {
        let store = CommentStore.getAll();
        return {
            comments: store.get('comments')
        }
    }

    class CommentItem extends React.Component {
        constructor (props, context) {
            super(props, context);
        }

        render () {
            return (
                <div className='comment' key={'comment-' + this.props.get('index')}>
                    {this.props.get('text') + ' ' + this.props.get('time').toLocaleDateString()}
                    <button onClick={this.props.deleteComment}>x</button>
                </div>
            );
        }
    }

    class Comments extends React.Component {
        constructor (props, context) {
            super(props, context);
            this.state = getStateFromStore();
            this.state.edit = false;
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

        shouldComponentUpdate (nextProps, nextState) {
            return !(this.props === nextProps || Immutable.is(this.props, nextProps)) ||
                   !(this.state === nextState || Immutable.is(this.state, nextState));
        }

        editComment () {
            //this.state.edit
        }

        deleteComment (index) {
            Event.emit('dispatcher.deleteComment', index);
        }

        render () {
            console.log('render!');

            return (
                <div className='comments'>
                    {this.state.comments.map((comment, index) => (
                            <div className='comment' key={'comment-' + index}>
                                {comment.get('text') + ' ' + comment.get('time').toLocaleDateString()}
                                {/*<button onClick={this.editComment.bind(this, index)}>E</button>*/}
                                <button onClick={this.deleteComment.bind(null, index)}>x</button>
                            </div>
                        )
                    )}
                </div>
            )
        }
    }

    return Comments;
});