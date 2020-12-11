import React, {Component} from 'react';
import Oll2 from "./oll/Oll2";
import Comment from "./comments/Comment";
class OllBody extends Component {
    comments=new Oll2
    state ={comments:[]}
    async componentDidMount(){
        let comments=await this.comments.comments()
        this.setState({comments})
    }
    render() {
        let comments =this.state.comments
        return (
            <div>
                {
                    comments.map((value ,index)=>
                        <Comment comment={value} key={index} />
                    )
                }
                <h1>comments</h1>

            </div>
        );
    }
}
export default OllBody;