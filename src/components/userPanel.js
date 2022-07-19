import React from "react";

const UserPanel = ({user, logout}) => {
    return (
        <div className="userpanel">
            <h1>{user.displayName}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default UserPanel;