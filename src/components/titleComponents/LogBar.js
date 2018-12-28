import React from 'react';

const LogBar = (userLoggedIn) => {

    let userState = (userLoggedIn)
        ? (<>
        <div className="flex-container toRight">
            <input className="inputField" type='text' id="user_name" />
            <input className="inputField" type='text' id="user_password" />
            <button className="MyButton toRight">Login</button>
        </div>
        <div className="flex-container">
        </div>
        </>)

        : (<>
        <div className="flex-container">
            <p className="inputField">You are logged in as: user_name</p>
        </div>
        <div className="flex-container">
            <button className="MyButton toRight">Logout</button>
        </div>
        </>)

    return <>
        <div className="LogBarAndFooter ">
            {userState}
        </div>
    </>
};

export default LogBar;