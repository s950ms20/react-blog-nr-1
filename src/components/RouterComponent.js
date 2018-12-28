import React from 'react';
import { Route } from 'react-router-dom';

// import Blog from './containers/Blog';
import About from './otherComponents/About';
import Contact from './otherComponents/Contact';
import AddPost from './blogComponents/AddPost';
import SinglePost from './blogComponents/SinglePost';

const RouterComponent = (props) => {
    return(
        <>
        {/* <Route path="/" exact component={Blog}></Route> */}
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        {/* <Route path="/addPost" component={AddPost}></Route> */}
        <Route path="/addPost" render={(props) => (<AddPost {...props} />)}/>
        {/* <Route path="/singlePost" component={SinglePost}></Route> */}
        <Route path="/:id" render={(props) => (<SinglePost {...props}
        />)} ></Route>
        </>
    )
}

export default RouterComponent;