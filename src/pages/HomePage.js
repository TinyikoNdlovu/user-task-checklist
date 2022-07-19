import UserPanel from '../components/userPanel';

import React from 'react';


import "../css/Home.css";

const Home = ({user, logout}) => {

    return (
        <div className="home-page"> 
        <UserPanel user={user} logout={logout} /> 
            
        </div>
        
    )
}

export default Home;