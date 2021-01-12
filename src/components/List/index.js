import Item from "../Item";
import "./styles.scss";

function List(props) {
    function handleDeleteTask(position) {
        props.handleCallback(position);
    }

    return (
        <ul className="pendingTasks">
            {props.tasks.map((task, key) => {
                return (
                    <Item
                        handleCallback={handleDeleteTask}
                        key={key}
                        task={task}
                        position={key}
                    />
                );
            })}
        </ul>
    );
}

export default List;
