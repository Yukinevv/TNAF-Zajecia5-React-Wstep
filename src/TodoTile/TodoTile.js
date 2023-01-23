import React from "react";
import './TodoTile.css';

function TodoTile(params) {

    return (
        <li>
            <p><b>{params.id}</b>: {params.value}</p>
            <div className="list-element-inner-container">
                <button type="button" className="edit-button" onClick={() => params.editTask(params.id)}>
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                </button>
                <button type="button" className="delete-button" onClick={() => params.deleteTask(params.id)}>
                    <span class="material-symbols-outlined">
                        remove
                    </span>
                </button>
            </div>
        </li>
    )
}

export default TodoTile;
