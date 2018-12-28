import React from 'react';

const AddPost = ({addNewPost, title, content, changedTitle, changedContent}) => {
    return <>
    <div>
        <div className="flex-container toCenter">
            <p>Add New Post</p>
        </div>
        <div className="flex-container toCenter">
            <form
            onSubmit={addNewPost}
            className="toCenter">
                <input type='text'
                className="addPostFields fields"
                placeholder="title"
                value={title}
                onChange={changedTitle}
                /><br />
                <textarea type='text'
                className="addPostFields fields"
                rows="15"
                placeholder="content"
                value={content}
                onChange={changedContent}
                />
                <br />
                <div className="flex-container toRight">
                    <button type="submit" className="MyButton toRight">Add Post</button>
                </div>
            </form>
        </div>
    </div>
    </>
};

export default AddPost;