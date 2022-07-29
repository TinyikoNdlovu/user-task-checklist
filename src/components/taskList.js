import React from "react";

import Task from './task'

const TaskList = ({tasks, setTasks}) => {
    console.log(tasks);

    return (
        <div className="task-container">
            <ul className="task-list">
                {tasks.map(task => (
                    <Task setTasks={setTasks} text={task.text} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;