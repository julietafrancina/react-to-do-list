import Item from "../Item";

function List(props) {
    return (
        <div>
            <ul>
                {props.tasks.map((task, key) => {
                    return <Item key={key} task={task} />;
                })}
            </ul>
        </div>
    );
}

export default List;
