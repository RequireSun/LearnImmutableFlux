'use strict';
define(['react', 'react-dom', 'immutable'], function (React, ReactDOM, Immutable) {
    return function (targetId, store) {
        if (!targetId || !document.getElementById(targetId) || !store) {
            return null;
        }

        function getStateFromStore() {
            let storeObj = store.getState();
            return {
                comment: storeObj.comment
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
                    store.dispatch({
                        type: 'EDIT_COMMENT',
                        number: index,
                        text: this.refs.input.value,
                        time: new Date
                    });
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
                store.dispatch({ type: 'REMOVE_COMMENT', number: index});
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
                let unsubscribe = store.subscribe(this.onChange.bind(this));
                this.setState({
                    unsubscribe: unsubscribe
                });
            }

            componentWillUnmount () {
                this.state.unsubscribe();
            }

            shouldComponentUpdate (nextProps, nextState) {
                return !(this.props === nextProps || Immutable.is(this.props, nextProps)) ||
                    !(this.state === nextState || Immutable.is(this.state, nextState));
            }

            render () {
                console.log('render!');

                return (
                    <div className='comments'>
                        {this.state.comment.map((comment, index) =>
                                (<CommentItem key={'comment-' + index} index={index}
                                    text={comment.get('text')}
                                    time={comment.get('time')}/>)
                        )}
                    </div>
                )
            }
        }

        return ReactDOM.render(<Comments />, document.getElementById(targetId));
    }
});