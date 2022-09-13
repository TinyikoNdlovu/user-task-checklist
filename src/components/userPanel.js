import React from "react";

import '../css/userPanel.css';

const UserPanel = ({user, logout}) => {
    return (
        <div className="userpanel">
           <nav className="userInfo">
           <h1>{user.displayName}</h1>
           <img src={user.photoURL} alt="avatar" />
           <button onClick={logout}>Logout</button>
           </nav>
        </div>
    );
}

export default UserPanel;