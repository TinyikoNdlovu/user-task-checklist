import React from "react";

import '../css/task.css';

const Task = ({text, tasks, setTasks, task}) => {

    const deleteHandler = () => {};
    return(
        <ul>
            <div className="task" style={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "15px"}}>
                <li className="task-item">{text}</li>
                <button onClick={deleteHandler} className="complete-btn">COMPLETE</button>
            </div>
        </ul>
        

    );
}

export default Task;