import "./styles.scss";

function Search(props) {
    function handleChange(e) {
        const { value } = e.target;
        props.handleCallback(value);
    }

    return (
        <div>
            <input
                className="inputText"
                type="text"
                placeholder="Escribí una tarea..."
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;
