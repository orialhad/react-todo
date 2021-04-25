import React, {useState} from "react";
import "./Main.css"
import AddTask from "../AddTask/AddTask";
import ToDo from "../../reusable/ToDo/ToDo";


const MOCK = [
    {id: 1, task: "blah blah blah",isCompleted: false,inProcess: false},
    {id: 2, task: "bli bli bli",isCompleted: false,inProcess: false}
]

function MainUseState() {
    let [todos, setTodos] = useState(MOCK);

    const addTodo = (value) => {
        const newTodos = [...todos, {id: todos.length + 1, task: value}];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted  = !newTodos[index].isCompleted;
        newTodos[index].inProcess  = false;
        setTodos(newTodos);
    };

    const processTodo = index => {
        const newTodos = [...todos];
        newTodos[index].inProcess  = !newTodos[index].inProcess;
        newTodos[index].isCompleted = false;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    return (
        <div className="main">

            {todos.map((todo, index) => (
                <ToDo
                    todo={todo}
                    key={index}
                    index={index}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    processTodo={processTodo}
                />
            ))}
            <AddTask addTodo={addTodo}/>
        </div>
    )
}

export default MainUseState
