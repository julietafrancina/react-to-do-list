import "./styles.scss";

function Button(props) {
    function handleClick() {
        props.handleCallback();
    }
    return (
        <div>
            <button onClick={handleClick} className="inputButton">
                Agregar
            </button>
        </div>
    );
}

export default Button;
