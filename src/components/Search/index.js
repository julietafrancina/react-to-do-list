import "./styles.scss";

function Search(props) {
    function handleChange(e) {
        const { value } = e.target;
        props.handleCallback(value);
    }

    function handleKeyDown(e) {
        const { keyCode } = e;
        props.handleCallback2(keyCode);
    }

    return (
        <input
            className="inputText"
            type="text"
            placeholder="Escribí una tarea..."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={props.value} //3º para que se borre el input: le asigno ese valor
        />
    );
}

export default Search;
