import "./App.css";
import Search from "./components/Search";
import Button from "./components/Button";
import List from "./components/List";
import Item from "./components/Item";
import "./reset.css";
import "./styles.scss";
import { useState } from "react";

function App() {
    //const tasks = [];

    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleWriteTask(inputValue) {
        // console.log(`la tarea es ${taskInput}`);
        setTaskInput(inputValue);
    }

    function handleAddTask() {
        //console.log(`la tarea es ${taskInput}`);
        setTasks([...tasks, taskInput]); //los tres puntos devuelven todos los elementos del array
        console.log(tasks);
    }

    return (
        <div className="App">
            <h1 className="title">¿Qué debería hacer hoy?</h1>
            <div className="inputContainer">
                <Search handleCallback={handleWriteTask} />
                <Button handleCallback={handleAddTask} />
                <List tasks={tasks} />
            </div>
        </div>
    );
}

export default App;

//                                       * MATE NOISE *
