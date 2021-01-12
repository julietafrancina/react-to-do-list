import "./App.css";
import Search from "./components/Search";
import Button from "./components/Button";
import List from "./components/List";
import "./reset.css";
import "./styles.scss";
import { useState } from "react";

function App() {
    //const tasks = [];

    const [taskInput, setTaskInput] = useState(""); //el valor del input es un string
    const [tasks, setTasks] = useState([]);

    function handleWriteTask(inputValue) {
        //inputValue porque recibe información
        // console.log(`la tarea es ${taskInput}`);
        setTaskInput(inputValue);
    }

    //--> función para agregar tareas haciendo click en el botón <--//
    function handleAddTask() {
        //console.log(`la tarea es ${taskInput}`);
        if (taskInput != "" && taskInput[0] != " ") {
            setTasks([...tasks, taskInput]); //los tres puntos devuelven todos los elementos del array
            setTaskInput(""); //1º para borrar el input después de apretar el botón: el input vuelve a estar en blanco/limpio el estado
        }
    }

    //--> función para agregar tareas con la tecla enter <--//
    function handleAddTaskEnter(keyCode) {
        if (keyCode == 13) {
            handleAddTask();
        }
    }

    //--> función para borrar tareas <-- //
    function handleDeleteTask(position) {
        console.log(`trato de borrar en app la posición ${position}`);

        const newTasks = tasks.filter((task, key) => {
            return key != position;
        });
        setTasks(newTasks);
    }

    return (
        <div className="App">
            <div className="contentWrapper">
                <h1 className="title">¿Qué debería hacer hoy?</h1>
                <div className="tasksWrapper">
                    <div className="inputContainer">
                        <Search
                            handleCallback2={handleAddTaskEnter}
                            handleCallback={handleWriteTask}
                            value={taskInput} //2º para borrar el input desp de apretar el botón: le paso el estado por props
                        />
                        <Button handleCallback={handleAddTask} />
                    </div>
                    <div className="pendingTasksContainer">
                        <h2 className="subtitle">Tareas pendientes:</h2>
                        <List handleCallback={handleDeleteTask} tasks={tasks} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
