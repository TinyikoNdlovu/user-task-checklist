import UserPanel from '../components/userPanel';
import TodoTasks from '../components/todoTasks';
import TaskList from '../components/taskList';

import React from 'react';


import "../css/Home.css";

const Home = (props) => {

    

    return (
        <div className="home-page"> 
        <UserPanel user={props.user} logout={props.logout} /> 
        <TodoTasks add={props.add} />
        <TaskList list={props.list} />
        </div>
        
    );
}

export default Home;