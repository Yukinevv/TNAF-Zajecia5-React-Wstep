import React from "react";
import TodoTile from "../TodoTile/TodoTile";
import './TodoList.css';

function TodoList(params) {

    return (
        <div id={params.taskList.length > 4 ? 'task-list-container' : ''}>
            <ul>
                {params.taskList.map(task => <TodoTile id={task.id} value={task.value} deleteTask={params.deleteTask} editTask={params.editTask} />)}
            </ul>
        </div>
    );
}

export default TodoList;
