import React from "react";

import '../css/task.css';

const Task = ({text, tasks, setTasks}) => {

    const deleteHandler = () => {};
    return(
        <div className="task">
            <li className="task-item">{text}</li>
            <button onClick={deleteHandler} className="complete-btn">COMPLETE</button>
        </div>

    );
}

export default Task;