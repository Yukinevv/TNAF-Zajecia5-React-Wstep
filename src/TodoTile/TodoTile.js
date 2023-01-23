import React from "react";

function TodoTile(params) {

    return (
        <li>
            {params.id}: {params.value}
            <button type="button" onClick={() => params.deleteTask(params.id)}>Usun zadanie</button>
            <button type="button" onClick={() => params.editTask(params.id)}>Edytuj zadanie</button>
        </li>
    )
}

export default TodoTile;
