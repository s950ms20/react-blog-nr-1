/// single post functional componet


import React from 'react';

const SinglePost = ({titleSelPst, contentSelPst, idSelPst, editMode, editModeHandler, updatePost, cancelPostUpdate, deletePost, editTitleHandler, editContentHandler, editTitle, editContent, creationTime}) => {

    const editModeButtons =(editMode) ? (<>
        <div className="flex-container">
            <button className="MyButton" onClick={updatePost}>Update</button>
            <button className="MyButton" onClick={cancelPostUpdate}>Cancel</button>
            <button className="MyButton" onClick={deletePost}>Delete</button>
        </div>
        </>
    ) : (<>
        <div className="flex-container">
            <button className="MyButton" onClick={editModeHandler}>Edit</button>
        </div>
    </>)

    const contetArea = (editMode) ? (<>
            <div className="toCenter">
                <input type='text'
                className="addPostFields fields"
                placeholder="title"
                value={editTitle}
                onChange={editTitleHandler}
                /><br />
            <div className="postFields fields">{creationTime}</div>
                <textarea type='text'
                className="addPostFields fields"
                rows="15"
                placeholder="content"
                value={editContent}
                onChange={editContentHandler}
                />
            </div>
    </>) : (<>
            <div className="postFields fields titleOfPost">{titleSelPst}</div>
            <div className="postFields fields">{creationTime}</div>
            <div className="postFields fields">{contentSelPst}</div>
            <div className="postFields fields">ID: {idSelPst}</div>
    </>)
    return <>
        <div className="flex-container">
            <div className="SinglePost">
            {editModeButtons}
            {contetArea}
            </div>
        </div>
    </>
};

export default SinglePost;