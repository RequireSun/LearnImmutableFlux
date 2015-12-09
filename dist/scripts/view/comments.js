define(['react', 'store/CommentStore'], function (React, CommentStore) {
    function getStateFromStore() {
        return {
            comments: CommentStore.getAll()
        }
    }

    var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){Comments[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;Comments.prototype=Object.create(____SuperProtoOf____Classb);Comments.prototype.constructor=Comments;Comments.__superConstructor__=____Classb;
        function Comments(props) {"use strict";
            ____Classb.call(this,props);
            this.state = getStateFromStore();
        }

        Object.defineProperty(Comments.prototype,"onChange",{writable:true,configurable:true,value:function( ) {"use strict";
            this.setState(getStateFromStore());
        }});

        //getInitialState () {
        //    return getStateFromStore();
        //}

        Object.defineProperty(Comments.prototype,"componentDidMount",{writable:true,configurable:true,value:function( ) {"use strict";
            CommentStore.addChangeListener(this.onChange);
        }});

        Object.defineProperty(Comments.prototype,"componentWillUnmount",{writable:true,configurable:true,value:function( ) {"use strict";
            CommentStore.removeChangeListener(this.onChange);
        }});

        Object.defineProperty(Comments.prototype,"render",{writable:true,configurable:true,value:function( ) {"use strict";
            var comments = this.state.comments.map(function(comment, index) {
                return (
                    React.createElement("div", {className: "comment", key: 'comment-' + index}, 
                        comment.text
                    )
                );
            });

            return (
                React.createElement("div", {className: "comments"}, 
                    comments
                )
            )
        }});
    

    return Comments;
});