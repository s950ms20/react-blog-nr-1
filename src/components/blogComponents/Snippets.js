import React, { Component } from 'react';
import PostSnippet from './PostSnippet';

class Snippets extends Component {

    state = {
        posts: this.props.posts,
        selectedPost: this.props.selectedPost,
    }

    selectBlogPost = (id) => {
            const posts = this.state.posts;
            const actualPosition = this.state.posts.findIndex(el => el.id === id);
            const selectedPost = posts[actualPosition];
            this.setState({selectedPost: selectedPost});
            console.log(selectedPost);
        }

    newSelectedPost = this.state.selectedPost;

    componentDidMount(){
        console.log(this.newSelectedPost)
    }

    render(){
    return(<>

    <div className="flex-container">
        {this.state.posts.map((post, index) => {
            return <PostSnippet
            key = {post.id}
            title = {post.title}
            content = {post.content}
            id = {post.id}
            selectPost = {()=>{this.selectBlogPost(post.id)}}
            creationTime = {post.creationTime}
            posts = {this.state.posts}
            selectedPost = {this.state.selectedPost}
            />
        })}
    </div>



    </>
    )
    }
};

export default Snippets;

export let newSelectedPost;