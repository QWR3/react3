import React, {Component} from 'react';

class Comment extends Component {
    comment =this.props
    render() {
        let {comment} =this.comment
        return (
            <div>
                <h2>{comment.id}-{comment.email}</h2>
            </div>
        );
    }
}
export default Comment;
