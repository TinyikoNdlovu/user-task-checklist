import UserPanel from '../components/userPanel';
import AddTask from '../components/addTask';
import TaskList from '../components/taskList';

import React, {useState} from 'react';


import "../css/Home.css";

const Home = ({user, logout}) => {

    const [inputField, setInputField] = useState("");
    const [tasks, setTasks] = useState([]);

    return (
        <div className="home-page"> 
        <UserPanel user={user} logout={logout} /> 
        <AddTask inputField={inputField} tasks={tasks} setTasks={setTasks} setInputField={setInputField} />
        <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
        
    );
}

export default Home;