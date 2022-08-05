import React from "react";

import Task from './task'

const TaskList = ({tasks, setTasks}) => {
    console.log(tasks);

    return (
        <div className="task-container" style={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <li className="task-list">
                {tasks.map(task => (
                    <Task setTasks={setTasks} text={task.text} />
                ))}
            </li>
        </div>
    );
}

export default TaskList;