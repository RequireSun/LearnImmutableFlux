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
            this.state = {
                edit: false,
                text: this.props.text
            };
        }

        editComment (index) {
            if (this.state.edit) {
                Event.emit('dispatcher.editComment', index, { text: this.refs.input.value, time: new Date });
                this.setState({
                    edit: false
                });
            } else {
                this.setState({
                    edit: true
                });
            }
        }

        onInputChange (e) {
            this.setState({
                text: this.refs.input.value || ''
            });
        }

        deleteComment (index) {
            Event.emit('dispatcher.deleteComment', index);
        }

        render () {
            return (
                <div className='comment'>
                    {this.state.edit ?
                        (<input ref="input" type="text" onChange={this.onInputChange.bind(this)} value={this.state.text}/>) :
                        (this.props.text + ' ' + this.props.time.toLocaleDateString())}
                    <button onClick={this.editComment.bind(this, this.props.index)}>E</button>
                    <button onClick={this.deleteComment.bind(this, this.props.index)}>x</button>
                </div>
            );
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
                    {/*this.state.comments.map((comment, index) => (
                            <div className='comment' key={'comment-' + index}>
                                {comment.get('text') + ' ' + comment.get('time').toLocaleDateString()}
                                <button onClick={this.deleteComment.bind(null, index)}>x</button>
                            </div>
                        )
                    )*/}
                    {this.state.comments.map((comment, index) =>
                        (<CommentItem key={'comment-' + index} index={index}
                                      text={comment.get('text')}
                                      time={comment.get('time')}/>)
                    )}
                </div>
            )
        }
    }

    return Comments;
});