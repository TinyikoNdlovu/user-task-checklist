import React from "react";

import '../css/taskList.css';

// import { db } from './firebase-config';
// import { query, collection, deleteDoc, doc } from 'firebase/firestore';

//import Task from './task'

const TaskList = (props) => {
    console.log(props);

    const {deleteTask} = props;

    return (
        <div className="task-container" style={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <div className="task-list">
                {props.list.map((task, id) => (
                    
                    <div style={{marginTop:"10%"}}>
                        {task.priorytyType === "High" ? (
                            <div>
                                <div className="priority-task">
                                <h1 className="task-item">{task.task}</h1>
                                <button onClick={(e) => props.deleteTask} className="complete-btn">COMPLETE</button>
                                </div>
                                <div className="high-line"></div>
                            </div>

                        ) : task.priorytyType === "Medium" ? (
                            <div>
                                    <div className="priority-task">
                                    <h1 className="task-item">{task.task}</h1>
                                    <button onClick={(e) => props.deleteTask} className="complete-btn">COMPLETE</button>
                                    </div>
                                    <div className="medium-line"></div>
                                </div>
                        ) :(
                            <div>
                            <div className="priority-task">
                            <h1 className="task-item">{task.task}</h1>
                            <button onClick={(e) => props.deleteTask} className="complete-btn">COMPLETE</button>
                            </div>
                            <div className="low-line"></div>
                        </div>
                        )} 
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskList;