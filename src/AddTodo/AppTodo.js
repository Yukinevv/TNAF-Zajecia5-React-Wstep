import React, { useState } from "react";
import TodoList from '../TodoList/TodoList';
import './AppTodo.css';

function AppTodo() {

    const [taskList, setTaskList] = useState([]);
    const [taskValue, setTaskValue] = useState("");
    const [taskId, setTaskId] = useState(1);

    function addTask(newId, isEdit) {
        if (!taskValue) {
            alert("Wpisz tresc zadania");
            return;
        }

        const task = {
            id: newId,
            value: taskValue
        };

        setTaskList(taskList => [...taskList, task]);
        if (!isEdit)
            setTaskId(taskId => taskId + 1);
        setTaskValue("");
    }

    function deleteTask(id) {
        setTaskList(taskList => taskList.filter(el => el.id !== id));
    }

    function editTask(id) {
        if (!taskValue) {
            alert("Wpisz tresc zadania");
            return;
        }

        deleteTask(id);
        addTask(id, true);
        setTaskList(taskList => taskList.sort((a, b) => a.id - b.id));
    }

    return (
        <div id="app-todo-container">
            <h2>Zadania do wykonania</h2>
            <TodoList taskList={taskList} deleteTask={deleteTask} editTask={editTask} />

            <textarea className="textarea-task-value" placeholder="Tu wpisz tresc zadania..." value={taskValue} onChange={e => setTaskValue(e.target.value)}></textarea>
            <button type="button" className="add-task-button" onClick={() => addTask(taskId, false)}>Dodaj zadanie</button>
        </div>
    );
}

export default AppTodo;
