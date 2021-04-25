import React from "react";
import "./AddTask.css"

function AddTask({addTodo}) {
    const [value, setValue] = React.useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <div className="add-task">
            <form>
                <button className="add-btn" type="submit"
                        onClick={handleSubmit}
                >Add
                </button>
                <input type="text"
                       className="add-todo-input"
                       placeholder="New Task"
                       value={value}
                       onChange={e => setValue(e.target.value)}>
                </input>

            </form>
        </div>
    )
}

export default AddTask
