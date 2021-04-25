import React, {useReducer} from "react";
import "./Main.css"
import AddTask from "../AddTask/AddTask";
import ToDo from "../../reusable/ToDo/ToDo";

const mock = [
    {id: 1, task: "blah blah blah", isCompleted: false, inProcess: false},
    {id: 2, task: "ma ma ma ma ma ", isCompleted: false, inProcess: false},
    {id: 3, task: "bli bli bli bli", isCompleted: false, inProcess: false},
    {id: 4, task: "blu blu blu blu", isCompleted: false, inProcess: false}
];

const ADD = "ADD";
const REMOVE = "REMOVE";
const COMPLETE = "COMPLETE";
const PROCESS = "PROCESS";
// const CHANGE_ORDER = "CHANGE_ORDER";

const todoReducer = (todos, action = {type: "", value: ""}) => {

    switch (action.type) {
        case ADD:
            return [...todos, {id: todos.length + 1, task: action.value, isCompleted: false, inProcess: false}]
        case REMOVE:
            const removedTodos = [...todos];
            removedTodos.splice(action.index, 1);
            return removedTodos
        case PROCESS:
            let processTodo = [...todos]
            processTodo[action.index] = {
                ...processTodo[action.index],
                inProcess: !processTodo[action.index].inProcess,
                isCompleted: false
            }
            return processTodo

        case COMPLETE:
            let completedTodo = [...todos]
            completedTodo[action.index] = {
                ...completedTodo[action.index],
                isCompleted: !completedTodo[action.index].isCompleted,
                inProcess: false
            }
            return completedTodo

    }

    return todos

}

function MainUseReducer() {
    let [todos, setTodos] = useReducer(todoReducer, mock);


    return (
        <div className="main">
            <AddTask className="add-task" addTodo={value => setTodos({type: ADD, value: value})}/>
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <ToDo
                        todo={todo}
                        key={index}
                        index={index}
                        completeTodo={() => setTodos({type: COMPLETE, index})}
                        removeTodo={() => setTodos({type: REMOVE, index})}
                        processTodo={() => setTodos({type: PROCESS, index})}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainUseReducer
