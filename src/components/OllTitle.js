import React, {Component} from 'react';
import Oll from './oll/Oll'
import Post from "./posts/Post";
class OllTitle extends Component {
    posts = new Oll
    state ={posts:[]}
    async componentDidMount(){
        let posts=await this.posts.posts()
        this.setState({posts})
    }
    render() {
        let posts =this.state.posts
        return (
            <div>
                {
                    posts.map((value, index) =>
                        <Post post={value} key={index}/>
                     )
                }
                <h1>posts</h1>
            </div>
        );
    }
}
export default OllTitle;
