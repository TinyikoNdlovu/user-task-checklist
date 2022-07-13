import React from "react";

const RegisterUser = () => {
    return (
        <div className="container">
            <form>
                <label>Full Name</label>
                <input type="text" name="fullname" id="fullname" />

                <label>Email</label>
                <input type="email" name="email" id="email" />

                <label>Password</label>
                <input type="password" name="password" id="password" />

                <button type="submit">Create Account</button>

                
            </form>
        </div>
    )
}

export default RegisterUser;