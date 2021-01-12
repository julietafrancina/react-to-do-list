import "./styles.scss";

function Item(props) {
    function handleClick() {
        //solución 1
        props.handleCallback(props.position);

        //--> solución 2 (más simplificado)
        //const { handleDeleteTask, position } = props;
        //handleDeleteTask(position);

        //eso es igual a:

        //const handleDelete = props.handleDelete
        //const position = props.position
    }

    return (
        <li className="taskItem">
            {props.task} <button onClick={handleClick}>Borrar</button>{" "}
        </li>
    );
}

export default Item;
