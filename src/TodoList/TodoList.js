import React from "react";
import TodoTile from "../TodoTile/TodoTile";

function TodoList(params) {

    return (
        <div>
            <h2>Zadania do wykonania</h2>
            <ul>
                {params.taskList.map(task => <TodoTile id={task.id} value={task.value} deleteTask={params.deleteTask} editTask={params.editTask} />)}
            </ul>
        </div>
    );
}

export default TodoList;
