import UserPanel from '../components/userPanel';
import AddTask from '../components/addTask';
import TaskList from '../components/taskList';

import React from 'react';


import "../css/Home.css";

const Home = ({user, logout}) => {

    return (
        <div className="home-page"> 
        <UserPanel user={user} logout={logout} /> 
        <AddTask />
        <TaskList />
        </div>
        
    )
}

export default Home;