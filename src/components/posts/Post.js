import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {post} =this.props
        return (
            <div>
                {console.log(post)}
                <h2>{post.id}-{post.title}</h2>
            </div>
        );
    }
}
export default Post;