import React from 'react';
import {Link} from 'react-router-dom';


const PostSnippet = ({title, content, id, selectPost, creationTime}) => {

    let ShortContent = content.slice(0,150) + "...";
    return <>
        <div className="flex-container">
            <div className="PostSnippet">
                <div className="postFields fields titleOfPost">{title}</div>
                <div className="postFields fields">{creationTime}</div>
                <div className="postFields fields">{ShortContent}</div>
                <div className="postFields fields">ID: {id}</div>
                <div className="flex-container toRight">
                    <button className="MyButton" onClick={selectPost}>
                        <Link to="/SinglePost">Read More</Link>
                    </button>

                </div>
            </div>
        </div>
    </>
};

export default PostSnippet;