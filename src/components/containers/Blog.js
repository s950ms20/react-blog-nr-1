import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import SinglePost from '../blogComponents/SinglePost';
import AddPost from '../blogComponents/AddPost';
import Snippets from '../blogComponents/Snippets';
import About from '../otherComponents/About';
import Contact from '../otherComponents/Contact';
import newSelectedPost from '../blogComponents/Snippets';
class Blog extends Component {

    state = {
        posts: [
                {title: 'title1', id: 111, creationTime:'Tue Dec 25 2018 17:28', content: 'Some Content for post1. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. Whats happened to me? he thought. It wasnt a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'},
                {title: 'title2', id: 112, creationTime:'Tue Dec 25 2018 17:28', content: 'Some Content for post2. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. Whats happened to me? he thought. It wasnt a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'},
                {title: 'title3', id: 113, creationTime:'Tue Dec 25 2018 17:28', content: 'Some Content for post3. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. Whats happened to me? he thought. It wasnt a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'},
                {title: 'title4', id: 114, creationTime:'Tue Dec 25 2018 17:28', content: 'Some Content for post4. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. Whats happened to me? he thought. It wasnt a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops'}
        ],
        selectedPost: [
            {title: '', id: '', content: ''}
        ],
        newTitle: '',
        newId: '',
        newContent: '',
        newCreationTime: '',
        editMode: false,
        editTitle: '',
        editId: '',
        editContent: '',
        editCreationTime: ''
    };

    componentDidMount(){
        this.setState({
            selectPost: newSelectedPost
        })
    }

    selectBlogPost = (id) => {
        const posts = this.state.posts;
        const actualPosition = this.state.posts.findIndex(el => el.id === id);
        const selectedPost = posts[actualPosition];
        this.setState({selectedPost: selectedPost});
        console.log(newSelectedPost);
    }

    addNewPost = (e) => {
        e.preventDefault();
        let newTitle = this.state.newTitle;
        let newId = Number(Math.floor(Math.random() * 1000000000));
        let newCreationTime = String(new Date()).slice(0,21);
        let newContent = this.state.newContent;
        let newPost = {
            title: newTitle,
            id: newId,
            content: newContent,
            creationTime: newCreationTime
        }
        let posts = [...this.state.posts];
         posts.push(newPost);
        this.setState({
            posts: posts
        });
    };

    newTitleHandler = (event) => {
        this.setState({
            newTitle: event.target.value
        });
    };

    newContentHandler = (event) => {
        this.setState({
            newContent: event.target.value
        });
    };

    editModeHandler = (id) => {
        const editMode = this.state.editMode
        this.setState({
            editMode: !editMode,
            editId: id
        })
        const posts = [...this.state.posts];
        const actualPosition = posts.findIndex(pst => pst.id === id);
        const editTitle = posts[actualPosition].title;
        const editContent = posts[actualPosition].content;

        this.setState({
            editTitle: editTitle,
            editContent: editContent
        })
    }

    updatePost = (id) =>{
        const posts = [...this.state.posts];
        const actualPosition = posts.findIndex(pst => pst.id === id);
        posts[actualPosition].title = this.state.editTitle;
        posts[actualPosition].content = this.state.editContent;

        this.setState({
            posts: posts,
            editTitle: '',
            editId: '',
            editContent: '',
            editMode: false,
            editCreationTime: '',
            id: ''
        })
    }

    editTitleHandler = (event) => {
        this.setState({
            editTitle: event.target.value
        })
    }

    editContentHandler = (event) => {
        this.setState({
            editContent: event.target.value
        })
    }

    cancelPostUpdate = () => {
        const editMode = this.state.editMode
        this.setState({
            editMode: !editMode
        })
    }

    deletePost = (id) => {
        const posts = this.state.posts;
        const actualPosition = posts.findIndex(pst => pst.id === id);
        posts.splice(actualPosition, 1);
        this.setState({
            posts: posts,
            editMode: false
        })
    }

    render(){
        return (
        <>
         <Route path="/" exact render={(props) => (<Snippets {...props}
            posts = {this.state.posts}
            selectedPost = {this.state.selectedPost}
            selectPost = {()=>{this.selectBlogPost(this.state.post.id)}}
            />)}/>

        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/addPost" render={(props) => (<AddPost {...props}
            addNewPost = {this.addNewPost}
            title = {this.state.newTitle}
            id = {this.state.newId}
            content = {this.state.newContent}
            changedTitle = {this.newTitleHandler.bind(this)}
            changedContent = {this.newContentHandler.bind(this)}
            creationTime = {this.state.newCreationTime}
            />)}/>

        <Route path="/SinglePost" render={(props) => (<SinglePost {...props}
            titleSelPst = {this.state.selectedPost.title}
            contentSelPst = {this.state.selectedPost.content}
            idSelPst = {this.state.selectedPost.id}
            editMode = {this.state.editMode}
            editModeHandler = {()=>{this.editModeHandler(this.state.selectedPost.id)}}
            updatePost = {()=>{this.updatePost(this.state.selectedPost.id)}}
            cancelPostUpdate = {()=>{this.cancelPostUpdate()}}
            deletePost = {()=>{this.deletePost(this.state.selectedPost.id)}}
            editTitleHandler = {this.editTitleHandler.bind(this)}
            editContentHandler = {this.editContentHandler.bind(this)}
            editTitle = {this.state.editTitle}
            editContent = {this.state.editContent}
            creationTime = {(this.state.selectedPost.creationTime)}
            />)}
            />
            </>
        )
    }
};

export default Blog;