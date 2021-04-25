import React from "react";
import "./ToDo.css"

function ToDo({todo, index, completeTodo, removeTodo, processTodo}) {
    const {id, task, isCompleted, inProcess} = todo
    const taskClassName = `task ${isCompleted ? "completed" : ""} ${inProcess ? "process" : ""}`
    const processClassName = `process-btn ${isCompleted ? "completed" : ""} ${inProcess ? "process" : ""}`
    const completeClassName = `complete-btn ${isCompleted ? "completed" : ""} ${inProcess ? "process" : ""}`
    const todoClassName = `todo ${isCompleted ? "completed" : ""} ${inProcess ? "process" : ""}`

    return (
        <div className={todoClassName}>

            <div className={taskClassName}>{task}</div>

            <div className="add-tsk-btns">
                <div className={processClassName} onClick={() => processTodo(index)}>
                    <br/><span className="tooltiptext">In Process... </span>
                </div>

                <div className={completeClassName} onClick={() => completeTodo(index)}>&#10003;</div>
                <div className="complete-btn" onClick={() => removeTodo(index)}>X</div>
            </div>
        </div>
    )
}

export default ToDo
